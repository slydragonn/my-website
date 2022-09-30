import { LinkButton, Text } from "components"
import Image from "next/image"

const AboutSection = () => {
  return (
    <section className="flex h-full md:flex-row flex-col justify-start">
      <Image
        src='/profile.jpeg'
        alt='Alejandro Londoño'
        width={400}
        height={400}
        className="rounded-sm"
      />
      <div className="flex flex-col md:justify-between justify-start md:h-full h-auto md:pl-20 pl-0">
        <span className="lg:w-[450px] w-full mb-2 lg:mt-10 mt-2">
          <Text>I&apos;m a front-end developer passionate about my work, I like to experiment with all kinds of things, especially programming and I love creating new projects.</Text>
        </span>
        <LinkButton message="On the web" href="/#"/>
      </div>
    </section>
  )
}

export default AboutSection