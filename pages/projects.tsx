import AOS from 'aos'
import 'aos/dist/aos.css'
import { Footer, HomeButton, MainLayout, ProjectItem } from 'components'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

const Projects: NextPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
    AOS.refreshHard()
  }, [])
  
  return (
    <>
      <Head>
        <title>Alejandro Londoño - Projects</title>
        <meta name="description" content="Alejandro's projects" />
      </Head>
      <MainLayout>
        <HomeButton />
        <section className="flex flex-col items-center">
          <ProjectItem
            title="chocolate wrappers"
            description="Designs of chocolate wrappers for AMAY Chocolates"
            date="2022.10"
            image="/wrappers.jpeg"
            link="https://www.instagram.com/p/CjN4_90u95y/"
            madeWith={['inkscape', 'figma']}
          />
          <ProjectItem
            title="Barber's website"
            description="Personal website for a barber"
            date="2022.09"
            image="/barber.png"
            link="https://danielbarber.vercel.app/"
            madeWith={['typescript', 'nextjs', 'css modules']}
          />
          <ProjectItem
            title="react easy comments"
            description="It's a simple library with that you can create a React Comments Sections Component."
            date="2022.08"
            image="/easy-comments.png"
            link="https://github.com/slydragonn/react-easy-comments"
            madeWith={['typescript', 'storybook', 'sass']}
          />
          <ProjectItem
            title="mark writer"
            description="It's a simple and easy Markdown Web Editor, with which you can display Markdown code to HTML."
            date="2022.07"
            image="/markwriter.jpg"
            link="https://markwriter.tech/"
            madeWith={['typescript', 'nextjs', 'codemirror']}
          />
        </section>
      </MainLayout>
      <Footer link="/projects" />
    </>
  )
}

export default Projects
