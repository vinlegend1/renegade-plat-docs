import React from 'react'
import Footer from '../components/Footer'
import Landing from '../components/Landing'
import LearnMore from '../components/LearnMore'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main-home">
        <Landing />
      </main>
      <LearnMore />
      <Footer />
    </>
  )
}
