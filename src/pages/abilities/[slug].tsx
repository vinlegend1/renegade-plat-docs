import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import Layout from '../../components/Layout'
import abilitiesList from '../../minjson/pokemonAbilities.min.json'
import { AbilityType } from '../../types'

interface Props {
    ability: AbilityType;
}

const Ability: React.FC<Props> = ({ ability: { AbilityName, Description } }) => {
    return (
        <Layout>
            <div className="abilities-wrapper">
                <h2>{AbilityName}</h2>
                <p>{Description}</p>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
    console.log(slug)
    const ability = abilitiesList.find(({ AbilityName }) => AbilityName.toLowerCase().replace(" ", "-") === slug)
    console.log(ability)

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
    // console.log(paths)

    return {
        paths,
        fallback: false // See the "fallback" section below
    };
}

export default Ability
