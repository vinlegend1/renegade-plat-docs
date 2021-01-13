import React from 'react'
import Landing from '../components/Landing'
import Layout from '../components/Layout'
import LearnMore from '../components/LearnMore'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemon Renegade Platinum - Unofficial Docs</title>
        <meta name="description" content="The Unofficial Docs for the popular rom hack of Pokemon Platinum, Renegade Platinum. It comes with better UI"></meta>
      </Head>
      <Layout>
        <main className="main-home">
          <Landing />
        </main>
        <LearnMore />
      </Layout>
    </>
  )
}
