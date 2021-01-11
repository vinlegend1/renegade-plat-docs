import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import Layout from '../../components/Layout'
import movesList from '../../minjson/pokemonMoves.min.json'
import { MoveType } from '../../types'

interface Props {
    move: MoveType;
}

const Move: React.FC<Props> = ({ move }) => {
    return (
        <Layout>
            <div className="move-wrapper">
                <h2 className="move-name">{move.Name}</h2>
                <p className="move-description">{move.Description}</p>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
    console.log(slug)
    const move = movesList.find(({ Name }) => Name.toLowerCase().replace(" ", "-") === slug)
    console.log(move)

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
    // console.log(paths)

    return {
        paths,
        fallback: false // See the "fallback" section below
    };
}

export default Move
