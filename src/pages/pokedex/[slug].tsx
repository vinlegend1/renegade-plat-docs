import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react'
import Layout from '../../components/Layout';
import { colours, effectiveColours, pokemonTypes } from '../../constants';
import pokedexRenPlat from "../../minjson/completePokedexRenPlat.min.json"
import { PokemonInfoType } from '../../types';
import typeCoverage from "../../minjson/pokemonTypeCoverage.min.json";
import StatCard from '../../components/StatCard';
import LearnsetCard from '../../components/LearnsetCard';
import Head from 'next/head';

interface Props {
    pokemon: PokemonInfoType;
    slug: string;
}

const PokemonInfo: React.FC<Props> = ({ pokemon: { Ability1, Ability2, Atk, Def, HP, Name, NationalID, SpA, SpD, Spe, Type1, Type2 }, slug }) => {
    const pkmn = slug === "giratina" ? "giratina-altered" : slug;
    const imgSrc = `https://img.pokemondb.net/artwork/${pkmn}.jpg`


    return (
        <>
            <Head>
                <title>{Name} Pokedex - Pokemon Renegade Platinum</title>
                <meta name="description" content="Data of a pokemon in pokemon platinum like moveset and base stat total"></meta>
            </Head>
            <Layout>
                <div className="pkmn-info-page-wrap">
                    <div className="pkmn-info-wrapper">
                        <div className="pokedex-pkmn-container">
                            <img src={imgSrc} className="pokedex-img" />
                            <h3 className="pokedex-pkmn-name">{Name}</h3>
                            <p className="pokemondb-credit">Image from <Link href="https://pokemondb.net"><a target="_blank">pokemondb.net</a></Link></p>
                        </div>
                        <div className="pkmn-info-card">
                            <div className="pkmn-info-id">
                                <p className="pkmn-info-label">NationalID</p>
                                <p className="pkmn-national-id">{NationalID}</p>
                            </div>
                            <div className="pkmn-info-type-wrap">
                                <p>Type</p>
                                <div className="pkmn-info-type">
                                    <div
                                        className="pkmn-info-type-block"
                                        style={{ backgroundColor: colours[Type1.toLowerCase()] }}
                                    >{Type1}</div>
                                    <div
                                        className="pkmn-info-type-block"
                                        style={{ backgroundColor: colours[Type2.toLowerCase()] }}
                                    >{Type2}</div>
                                </div>
                            </div>
                            <div className="pkmn-info-abilities-wrap">
                                <p>Abilities</p>
                                <div className="pkmn-info-abilities">
                                    <div className="pkmn-info-ability-1">1. <Link href={`/abilities/${Ability1.toLowerCase().replace(" ", "-")}`}><a>{Ability1}</a></Link></div>
                                    <div className="pkmn-info-ability-2">{Ability2 ? "2. " : null} {Ability2 ? <Link href={`/abilities/${Ability2.toLowerCase().replace(" ", "-")}`}><a>{Ability2}</a></Link> : null}</div>
                                </div>
                            </div>
                        </div>
                        <div className="pkmn-type-defense">
                            <h4 className="pkmn-type-defense-head">Type Defenses</h4>
                            <p className="pkmn-type-defense-sub">The effectiveness of each type on {Name}</p>
                            <div className="pkmn-type-defense-block">
                                {pokemonTypes.map(type => {
                                    const currPokemonType = typeCoverage.find(data => (data.type1 === Type1 || data.type1 === Type2) && (data.type2 === Type1 || data.type2 === Type2))
                                    // console.log(currPokemonType);
                                    const typeIndex = pokemonTypes.indexOf(type);

                                    return (
                                        <div key={type} className="pkmn-type-effect">
                                            <div
                                                style={{ color: "white", backgroundColor: colours[type.toLowerCase()], }}
                                            >
                                                {type.slice(0, 3)}
                                            </div>
                                            <div
                                                style={{ backgroundColor: effectiveColours[`${currPokemonType.defensiveCoverage[typeIndex]}`], color: "white", marginTop: "0.25rem" }}
                                            >{currPokemonType.defensiveCoverage[typeIndex]}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <StatCard HP={HP} Atk={Atk} Def={Def} SpA={SpA} SpD={SpD} Spe={Spe} />
                    <LearnsetCard pokemonName={Name} learnset={pokedexRenPlat.find(pokemon => pokemon.Name === Name).learnset} />
                </div>
            </Layout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
    // console.log(slug)
    const pokemonName: any = slug === "mr-mime" ? "Mr. Mime" : slug === "farfetchd" ? "Farfetch'd" : slug === "nidoran-f" ? "Nidoran♀" : slug === "nidoran-m" ? "Nidoran♂" : slug === "mime-jr" ? "Mime Jr." : slug === "shaymin-land" ? "Shaymin" : slug;
    const pkmn = pokedexRenPlat.find(pokemon => pokemon.Name.toLowerCase() === pokemonName.toLowerCase())

    return {
        props: {
            pokemon: pkmn,
            slug
        }, // will be passed to the page component as props
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = []
    pokedexRenPlat.forEach(({ Name }) => {
        const pokemonName = Name === "Mr. Mime" ? "mr-mime" : Name === "Farfetch'd" ? "farfetchd" : Name === "Nidoran♀" ? "nidoran-f" : Name === "Nidoran♂" ? "nidoran-m" : Name === "Mime Jr." ? "mime-jr" : Name === "Shaymin" ? "shaymin-land" : Name.toLowerCase();
        paths.push({ params: { slug: pokemonName } })
    });
    // console.log(paths)

    return {
        paths,
        fallback: false // See the "fallback" section below
    };
}


export default PokemonInfo
