import { About, Hero } from 'components/sections'
import { Container, Navbar } from 'components/ui'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OBSignals</title>
      </Head>

      <Hero />
      <About />
    </>
  )
}

export default Home
