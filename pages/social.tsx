import { HomeButton } from 'components'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactNode } from 'react'
import {
  SiGithub as GithubIcon,
  SiInstagram as InstagramIcon,
  SiLinkedin as LinkedinIcon,
  SiMedium as MediumIcon
} from 'react-icons/si'

interface SocialItemProps {
  children: ReactNode
}

const SocialItem = ({ children }: SocialItemProps) => {
  return (
    <section className="flex justify-between items-center w-full bg-[#181818]/60 text-white font-thin text-lg py-5 px-10 backdrop-blur-sm rounded mt-1 sm:mt-4 shadow-lg hover:translate-x-4 transition-all">
      {children}
    </section>
  )
}

const Social: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alejandro Londoño - Social Media</title>
        <meta name="description" content="Alejandro's website" />
      </Head>
      <div className="absolute top-4 left-4">
        <HomeButton />
      </div>
      <section className="flex flex-col items-center justify-center w-full min-h-[100vh] px-4 sm:px-10">
        <div className="w-[120px] h-[120px]">
          <Image
            src="/profile.jpeg"
            alt="Alejandro Londoño"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
        <section className="relative w-full sm:w-[600px] flex justify-center border-r border-r-[#767676] border-t border-t-[#767676] rounded-tr p-4 mt-8">
          <div className="z-0 absolute top-0 left-0 bottom-0 right-0 m-auto flex flex-col uppercase text-white text-5xl sm:text-6xl md:text-8xl text-center font-extrabold transition-all select-none">
            <span className="mb-6 md:mb-1">alejandro</span>
            <span className="mb-6 md:mb-1">londoño</span>
            <span className="mb-6 md:mb-1">frontend</span>
            <span className="mb-6 md:mb-1">developer</span>
          </div>
          <div className="z-10 relative w-[250px] sm:w-[80%] md:w-[350px] px-4 border-l border-l-[#767676] border-t border-t-[#767676] rounded-tl">
            <SocialItem>
              <GithubIcon />
              <a
                className="hover:text-orange-500 transition-all duration-300"
                target="_blank"
                href="https://github.com/slydragonn"
                rel="noreferrer"
              >
                @slydragonn
              </a>
            </SocialItem>
            <SocialItem>
              <InstagramIcon />
              <a
                className="hover:text-orange-500 transition-all duration-300"
                target="_blank"
                href="https://www.instagram.com/sly_dragonn/"
                rel="noreferrer"
              >
                @sly_dragonn
              </a>
            </SocialItem>
            <SocialItem>
              <LinkedinIcon />
              <a
                className="hover:text-orange-500 transition-all duration-300"
                target="_blank"
                href="https://www.linkedin.com/in/alejolg/"
                rel="noreferrer"
              >
                @alejolg
              </a>
            </SocialItem>
            <SocialItem>
              <MediumIcon />
              <a
                className="hover:text-orange-500 transition-all duration-300"
                target="_blank"
                href="https://medium.com/@slydragonn"
                rel="noreferrer"
              >
                @slydragonn
              </a>
            </SocialItem>
          </div>
        </section>
      </section>
    </>
  )
}

export default Social
