import { AboutSection, GridLayout, GridTitle, HeroSection, MainLayout } from 'components'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alejandro Londoño - Home</title>
        <meta name="description" content="Alejandro's website" />
        <link rel="icon" href="/fireball.png" />
      </Head>
      <div className='z-20 fixed top-0 left-0 w-full'>
        <HeroSection />
      </div>
      <div className='z-30 relative mt-[570px]'>
        <MainLayout>
          <GridLayout>
            <GridTitle>about</GridTitle>
            <AboutSection />
            <GridTitle>projects</GridTitle>
            <div className='border-l border-l-[#767676]'>World</div>
            <GridTitle>posts</GridTitle>
            <div className='border-l border-l-[#767676]'>World</div>
            <GridTitle>blog</GridTitle>
            <div className='border-l border-l-[#767676]'>World</div>
          </GridLayout>
        </MainLayout>
      </div>
      
    </div>
  )
}

export default Home
