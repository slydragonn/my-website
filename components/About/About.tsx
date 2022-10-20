import { LinkButton, Text } from 'components'
import Image from 'next/image'
import Skills from './Skills'
import { SiTwitter as TwitterIcon, SiYoutube as YoutubeIcon } from 'react-icons/si'

const AboutSection = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-start" id="about">
        <Image
          src="/profile.jpeg"
          alt="Alejandro Londoño"
          width={400}
          height={400}
          className="rounded-sm"
          data-aos="zoom-in-up"
        />
        <div className="flex flex-col justify-start md:justify-between pl-0 md:pl-20">
          <div data-aos="zoom-in" className="bg-[#1d1d1d] p-4 rounded shadow-sm text-center mt-4 md:mt-0">
            <span className="text-white font-thin text-base md:text-lg">
              Hi! I&apos;m a 🚀 Front-End Developer | 💻 Digital Craftsman
            </span>
          </div>
          <span className="lg:w-[450px] w-full mb-2 lg:mt-10 mt-2">
            <Text>
              I like to experiment with all kinds of things, especially
              programming and I love creating new projects.
            </Text>
          </span>
          <section className='flex items-center my-2 sm:my-0'>
            <Text>Find me on:</Text>
            <ul className='flex ml-4'>
              <li className='mr-3'>
                <a 
                className='text-gray-300 font-thin hover:text-[#DE4C36] transition-all duration-300' 
                href='https://twitter.com/slydragonn' 
                target='_blank' rel="noreferrer">
                  <TwitterIcon className='w-[20px] h-[20px]' />
                </a>
              </li>
              <li>
                <a 
                className='text-gray-300 font-thin hover:text-[#DE4C36] transition-all duration-300' 
                href='https://www.youtube.com/channel/UCzTcqvA5oGFZA8RQH3kMlkQ/about' 
                target='_blank' rel="noreferrer">
                  <YoutubeIcon className='w-[20px] h-[20px]' />
                </a>
              </li>
            </ul>
          </section>
          <LinkButton message="On the web" href="/social" isExternal={false} />
        </div>
      </section>
      <Skills />
    </>
  )
}

export default AboutSection
