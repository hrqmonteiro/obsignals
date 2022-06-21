import { About, Download, Hero } from 'components/sections'
import { Container, MobileNavbar, Navbar } from 'components/ui'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OBSignals</title>
      </Head>

      <Navbar />

      <MobileNavbar />

      <Hero />
      <About />
      <Download />
    </>
  )
}

export default Home
