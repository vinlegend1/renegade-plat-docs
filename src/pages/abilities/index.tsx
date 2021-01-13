import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'
import abilitiesList from '../../minjson/pokemonAbilities.min.json'
import { AbilityType } from '../../types'

interface Props {
    abilities: AbilityType[];
}

const AbilitiesIndex: React.FC<Props> = ({ abilities }) => {
    return (
        <>
            <Head>
                <title>Abilities - Pokemon Renegade Platinum</title>
                <meta name="description" content="Details and info on pokemon abilities in Pokemon Renegade Platinum rom hack"></meta>
            </Head>
            <Layout>
                <div className="abilities-index-wrapper">
                    <div className="abilities-label">
                        <h3 className="abilities-name">Name</h3>
                        <h3 className="abilities-desc">Description</h3>
                    </div>
                    {abilities.map(({ AbilityName, Description }) => (
                        <div className="abilities-data" id={AbilityName.toLowerCase().replace(" ", "-")} key={AbilityName.toLowerCase().replace(" ", "-")}>
                            <div className="abilities-data-name">
                                <Link href={`/abilities/${AbilityName.toLowerCase().replace(" ", "-")}`}><a>{AbilityName}</a></Link>
                            </div>
                            <p>{Description}</p>
                        </div>
                    ))}
                </div>
            </Layout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    return {
        props: {
            abilities: abilitiesList
        }, // will be passed to the page component as props
    }
}

export default AbilitiesIndex
