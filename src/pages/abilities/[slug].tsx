import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import Layout from '../../components/Layout'
import abilitiesList from '../../minjson/pokemonAbilities.min.json'
import renPlatPokedex from '../../minjson/completePokedexRenPlat.min.json'
import { AbilityType } from '../../types'
import PokemonCard from '../../components/PokemonCard'
import Link from 'next/link'

interface Props {
    ability: AbilityType;
}

const Ability: React.FC<Props> = ({ ability: { AbilityName, Description } }) => {

    const pokemonWithAbility = renPlatPokedex.filter(pokemon => pokemon.Ability1 === AbilityName || pokemon.Ability2 === AbilityName);
    return (
        <Layout>
            <div className="abilities-wrapper">
                <h2>{AbilityName}</h2>
                <p>{Description}</p>
                <div className="pkmn-w-ability">
                    <h3>Pokemon with {AbilityName} Ability</h3>
                    <p>All images found on this page and other pages are from <Link href="https://pokemondb.net"><a target="_blank">pokemondb.net</a></Link></p>
                </div>
                <div className="pkmn-w-ability-wrap">
                    {pokemonWithAbility.map(({ Name, NationalID, Type1, Type2 }, index) => {
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
    const ability = abilitiesList.find(({ AbilityName }) => AbilityName.toLowerCase().replace(" ", "-") === slug)

    return {
        props: {
            ability
        }, // will be passed to the page component as props
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = []
    abilitiesList.forEach(({ AbilityName }) => {
        const urlFriendlyName = AbilityName.toLowerCase().replace(" ", "-")
        paths.push({ params: { slug: urlFriendlyName } })
    })

    return {
        paths,
        fallback: false // See the "fallback" section below
    };
}

export default Ability
