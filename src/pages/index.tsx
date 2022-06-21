import { About, Download, Hero, Instructions } from 'components/sections'
import { Container, FloatingMenu, MobileNavbar, Navbar } from 'components/ui'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>obsignals</title>
      </Head>

      <Navbar />
      <MobileNavbar />
      <FloatingMenu />

      <Hero />
      <About />
      <Download />
      <Instructions />
    </>
  )
}

export default Home
