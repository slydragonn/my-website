import { CustomButton, Footer, LinkItem, MainLayout, ProjectItem } from "components";
import type { NextPage } from "next";
import Head from 'next/head';

const Projects: NextPage = () => {
  return (
    <>
      <Head>
          <title>Alejandro Londoño - Projects</title>
          <meta name="description" content="Alejandro's projects" />
      </Head>
      <MainLayout>
        <div className="flex items-center justify-between w-28 bg-[#1d1d1d] pr-3 rounded mb-20">
          <CustomButton><LinkItem href="/">&#8592;</LinkItem></CustomButton>
          <span className="first-line:text-gray-300 font-thin cursor-default select-none">HOME</span>
        </div>
        <section className="flex flex-col items-center">
          <ProjectItem
            title="chocolate wrappers"
            description="Designs of chocolate wrappers for AMAY Chocolates"
            date="2022.10"
            image="/wrappers.jpeg"
            link="https://www.instagram.com/p/CjN4_90u95y/"
            madeWith={["inkscape", "figma"]}
          />
          <ProjectItem
            title="Barber's website"
            description="Personal website for a barber"
            date="2022.09"
            image="/barber.png"
            link="https://daniel-website-theta.vercel.app/"
            madeWith={["typescript", "nextjs", "css modules"]}
          />
          <ProjectItem
            title="react easy comments" 
            description="It's a simple library with that you can create a React Comments Sections Component." 
            date="2022.08" 
            image="/easy-comments.png" 
            link="https://github.com/slydragonn/react-easy-comments" 
            madeWith={["typescript", "storybook", "sass"]}
          />
          <ProjectItem
            title="mark writer"
            description="It's a simple and easy Markdown Web Editor, with which you can display Markdown code to HTML."
            date="2022.07"
            image="/markwriter.jpg"
            link="https://markwriter.tech/"
            madeWith={["typescript", "nextjs", "codemirror"]}
          />
        </section>
      </MainLayout>
      <Footer link="/projects"/>
    </>
  )
}

export default Projects