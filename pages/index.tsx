import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  AboutSection,
  Footer,
  GridItem,
  GridLayout,
  GridTitle,
  HeroSection,
  LinkButton,
  MainLayout,
  PostsSection
} from 'components'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { myPosts } from 'utils'

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
    AOS.refreshHard()
  }, [])
  return (
    <div>
      <Head>
        <title>Alejandro Londoño - Home</title>
        <meta name="description" content="Alejandro's website" />
      </Head>
      <div className="z-20 fixed top-0 left-0 w-full">
        <HeroSection />
      </div>
      <div className="z-30 relative mt-[100vh]">
        <MainLayout>
          <GridLayout>
            <GridTitle>about</GridTitle>
            <GridItem>
              <AboutSection />
            </GridItem>
            <GridTitle>projects</GridTitle>
            <GridItem>
              <LinkButton
                href="/projects"
                message="See projects"
                isExternal={false}
              />
            </GridItem>
            <GridTitle>posts</GridTitle>
            <GridItem>
              <PostsSection posts={myPosts} />
            </GridItem>
            <GridTitle>blog</GridTitle>
            <GridItem>
              <LinkButton
                href="https://slyblog.vercel.app"
                message="Go to blog"
                isExternal={true}
              />
            </GridItem>
          </GridLayout>
        </MainLayout>
      </div>
      <Footer link="/" />
    </div>
  )
}

export default Home
