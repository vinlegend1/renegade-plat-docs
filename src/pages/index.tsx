import React from 'react'
import Landing from '../components/Landing'
import Layout from '../components/Layout'
import LearnMore from '../components/LearnMore'

export default function Home() {
  return (
    <Layout>
      <main className="main-home">
        <Landing />
      </main>
      <LearnMore />
    </Layout>
  )
}
