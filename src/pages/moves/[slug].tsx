import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'
import { colours } from '../../constants'
import movesList from '../../minjson/pokemonMoves.min.json'
import { MoveType, SimpleMoveType } from '../../types'
import renPlatPokedex from '../../minjson/completePokedexRenPlat.min.json'
import PokemonCard from '../../components/PokemonCard'

interface Props {
    move: MoveType;
}

const Move: React.FC<Props> = ({ move }) => {

    const pokemonWithMove = [];
    for (let i = 0; i < renPlatPokedex.length; i++) {
        if (renPlatPokedex[i].learnset.filter(l => l.move === move.Name).length > 0) {
            pokemonWithMove.push(renPlatPokedex[i]);
        }
    }

    return (
        <Layout>
            <div className="move-wrapper">
                <div className="name-type-group-wrap">
                    <h2 className="move-name">{move.Name}</h2>
                    <div
                        className="move-type"
                        style={{ backgroundColor: colours[move.Type.toLowerCase()] }}
                    >{move.Type}</div>
                </div>
                <p className="move-description">{move.Description}</p>
                <div className="move-info-card">
                    <div className="move-info-cat move-info">
                        <h3>Category</h3>
                        <p>{move["Cat."]}</p>
                    </div>
                    <div className="move-info-pp move-info">
                        <h3>PP</h3>
                        <p>{move["PP"]}</p>
                    </div>
                    <div className="move-info-att move-info">
                        <h3>Power</h3>
                        <p>{move["Att."]}</p>
                    </div>
                    <div className="move-info-acc move-info">
                        <h3>Accuracy</h3>
                        <p>{move["Acc."]}</p>
                    </div>
                    <div className="move-info-sec-effect move-info">
                        <h3>Sec. Effect</h3>
                        <p>{move["secEffect"]}</p>
                    </div>
                </div>
                <div className="pkmn-w-move">
                    <h3>Pokemon that Learn {move.Name} via Level Up</h3>
                    <p>All images found on this page and other pages are from <Link href="https://pokemondb.net"><a target="_blank">pokemondb.net</a></Link></p>
                </div>
                <div className="pkmn-w-move-wrap">
                    {pokemonWithMove.map(({ Name, NationalID, Type1, Type2 }, index) => {
                        const pokemonName = Name === "Mr. Mime" ? "mr-mime" : Name === "Farfetch'd" ? "farfetchd" : Name === "Nidoran♀" ? "nidoran-f" : Name === "Nidoran♂" ? "nidoran-m" : Name === "Mime Jr." ? "mime-jr" : Name === "Giratina" ? "giratina-altered" : Name === "Shaymin" ? "shaymin-land" : Name.toLowerCase()

                        return (
                            <PokemonCard
                                imgSrc={`https://img.pokemondb.net/artwork/${pokemonName}.jpg`}
                                name={Name}
                                nationalId={NationalID}
                                type1={Type1}
                                type2={Type2}
                                id={pokemonName}
                                key={`${NationalID}${index}`}
                            />
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
    const move = movesList.find(({ Name }) => Name.toLowerCase().replace(" ", "-") === slug)

    return {
        props: {
            move
        }, // will be passed to the page component as props
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = []
    movesList.forEach(({ Name }) => {
        const urlFriendlyName = Name.toLowerCase().replace(" ", "-")
        paths.push({ params: { slug: urlFriendlyName } })
    })

    return {
        paths,
        fallback: false // See the "fallback" section below
    };
}

export default Move
