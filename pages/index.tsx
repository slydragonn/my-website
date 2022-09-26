import { HeroSection } from 'components'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alejandro Londoño - Home</title>
        <meta name="description" content="Alejandro's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
    </div>
  )
}

export default Home
