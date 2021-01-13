import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'
import PokemonCard from '../../components/PokemonCard'
import pokedexRenPlat from "../../minjson/pokedexRenPlat.min.json"

const Pokedex = () => {
    return (
        <>
            <Head>
                <title>Pokedex - Pokemon Renegade Platinum</title>
                <meta name="description" content="List of pokemon in renegade platinum and their respective typings."></meta>
            </Head>
            <Layout>
                <div className="note">
                    <h3>Note</h3>
                    <p>All images found on this page and other pages are from <Link href="https://pokemondb.net"><a target="_blank">pokemondb.net</a></Link></p>
                </div>
                <div className="pokedex-page">
                    {
                        pokedexRenPlat.map(({ Name, NationalID, Type1, Type2 }, index) => {
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
                        })
                    }
                </div>
            </Layout>
        </>
    )
}

export default Pokedex
