import { AboutSection, GridItem, GridLayout, GridTitle, HeroSection, LinkButton, MainLayout, PostsSection } from 'components'
import type { NextPage } from 'next'
import Head from 'next/head'

const myPosts = [
  {
    id: 'post-4',
    title: 'El uso del operador ternario vs if & else',
    date: '2022.09',
    url: 'https://www.linkedin.com/pulse/el-uso-del-operador-ternario-vs-else-alejandro-londo%C3%B1o-gomez'
  },
  {
    id: 'post-3',
    title: 'Mis características preferidas de JavaScript',
    date: '2022.08',
    url: 'https://www.linkedin.com/pulse/mis-caracter%C3%ADsticas-preferidas-de-javascript-alejandro-londo%C3%B1o-gomez'
  },
  {
    id: 'post-2',
    title: '3 recursos imprescindibles para todo desarrollador front-end',
    date: '2022.08',
    url: "https://www.linkedin.com/pulse/3-recursos-imprescindibles-para-todo-desarrollador-londo%C3%B1o-gomez"
  },
  {
    id: 'post-1',
    title: '¿Qué es el Scope? y su utilidad para un código sostenible.',
    date: '2022.07',
    url: 'https://medium.com/@slydragonn/qu%C3%A9-es-el-scope-y-su-utilidad-para-un-c%C3%B3digo-sostenible-5f64dfad57f6'

  }
]

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
            <GridItem><AboutSection /></GridItem>
            <GridTitle>projects</GridTitle>
            <GridItem><LinkButton href='/projects' message='See projects'/></GridItem>
            <GridTitle>posts</GridTitle>
            <GridItem><PostsSection posts={myPosts}/></GridItem>
            <GridTitle>blog</GridTitle>
            <GridItem><LinkButton href='/blog' message='Go to blog'/></GridItem>
          </GridLayout>
        </MainLayout>
      </div>
      
    </div>
  )
}

export default Home
