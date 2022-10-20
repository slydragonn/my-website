import { HomeButton } from 'components'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ReactNode } from 'react'
import {
  SiGithub as GithubIcon,
  SiLinkedin as LinkedinIcon,
  SiYoutube as YoutubeIcon,
  SiTwitter as TwitterIcon
} from 'react-icons/si'

interface SocialItemProps {
  children: ReactNode,
  color: string
}

const SocialItem = ({ children, color }: SocialItemProps) => {
  return (
    <li style={{backgroundColor: color, boxShadow: '7px 7px #181818'}} className="flex justify-around items-center w-full text-[#181818] font-medium text-lg border-[3px] border-[#181818] py-3 px-10 rounded-sm mt-4 sm:mt-8 hover:translate-x-4 transition-all">
      {children}
    </li>
  )
}

const Social: NextPage = () => {
  return (
    <div className='relative'>
      <Head>
        <title>Alejandro Londoño - Social Media</title>
        <meta name="description" content="Alejandro's website" />
      </Head>
      <div className="z-20 absolute top-4 left-4">
        <HomeButton />
      </div>
      <section className="z-0 relative flex flex-col items-center justify-center w-full min-h-[100vh] py-5 px-4 sm:px-10 bg-yellow-400">
        <div>
         { /* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/github.png"
            alt="Alejandro Londoño"
            className=" w-[100px] h-[100px] rounded-full object-cover border border-[#181818]"
          />
        </div>
        <h1 className='text-lg font-bold mt-2'>slydragonn</h1>
        <span className='font-thin text-center'>🚀 Front-End Developer | 💻 Digital Craftsman</span>
        <section className='flex'>
          <span className="font-semibold mr-3">More about me:</span>
          <ul className="flex font-thin">
            <li className='underline mr-2'><a href="https://slydragonn.site/projects" target='_blank' rel="noreferrer">Projects</a></li>
            <li className='underline'><a href="https://slyblog.vercel.app" target='_blank' rel="noreferrer">Blog</a></li>
          </ul>
        </section>
        <ul className="z-10 relative w-full sm:w-[400px] flex flex-col justify-center p-4">
            <SocialItem color='#a97df0'>
              <GithubIcon />
              <a
                className="hover:text-yellow-400 transition-all duration-300"
                target="_blank"
                href="https://github.com/slydragonn"
                rel="noreferrer"
              >
                @slydragonn
              </a>
            </SocialItem>
            <SocialItem color='#61ebf0'>
              <TwitterIcon />
              <a
                className="hover:text-yellow-400 transition-all duration-300"
                target="_blank"
                href="https://twitter.com/slydragonn"
                rel="noreferrer"
              >
                @slydragonn
              </a>
            </SocialItem>
            <SocialItem color='#f06661'>
              <YoutubeIcon />
              <a
                className="hover:text-yellow-400 transition-all duration-300"
                target="_blank"
                href="https://www.youtube.com/channel/UCzTcqvA5oGFZA8RQH3kMlkQ"
                rel="noreferrer"
              >
                @slydragonn
              </a>
            </SocialItem>
            <SocialItem color='#8ef061'>
              <LinkedinIcon />
              <a
                className="hover:text-yellow-400 transition-all duration-300"
                target="_blank"
                href="https://www.linkedin.com/in/alejolg/"
                rel="noreferrer"
              >
                @alejolg
              </a>
            </SocialItem>
        </ul>
      </section>
    </div>
  )
}

export default Social
