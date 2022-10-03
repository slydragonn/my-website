import { LinkButton, Text } from 'components'
import Image from 'next/image'
import Skills from './Skills'

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
        />
        <div className="flex flex-col justify-start md:justify-between pl-0 md:pl-20">
          <div className="bg-[#1d1d1d] p-4 rounded shadow-sm text-center mt-4 md:mt-0">
            <span className="text-white font-thin text-base md:text-lg">
              Hi! I&apos;m Front-End Developer / Designer
            </span>
          </div>
          <span className="lg:w-[450px] w-full mb-2 lg:mt-10 mt-2">
            <Text>
              I like to experiment with all kinds of things, especially
              programming and I love creating new projects.
            </Text>
          </span>
          <LinkButton message="On the web" href="/social" isExternal={false} />
        </div>
      </section>
      <Skills />
    </>
  )
}

export default AboutSection
