import { LinkButton, ProjectLayout, Text } from 'components'
import Image from 'next/image'

interface ProjectItemProps {
  title: string
  description: string
  date: string
  link: string
  image: string
  madeWith: string[]
}

const ProjectItem = ({
  title,
  description,
  date,
  link,
  image,
  madeWith
}: ProjectItemProps) => {
  return (
    <ProjectLayout>
      <section className="flex flex-col md:flex-row justify-between w-full mb-7">
        <div>
          <h2 className="text-white uppercase font-medium text-xl">{title}</h2>
          <span className="text-gray-300 font-thin text-sm">{date}</span>
        </div>
        <div className="w-auto md:w-[350px] text-left md:text-right my-4 md:my-0">
          <Text>{description}</Text>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-col justify-between">
          <LinkButton message="Visit" href={link} isExternal={true} />
          <section data-aos="zoom-in" data-aos-delay='800' data-aos-once="true" className="flex items-center w-auto p-4 bg-[#181818] my-5 md:my-0 rounded">
            <span className="font-thin text-gray-300 text-sm mr-3">
              MADE WITH:
            </span>
            {madeWith.map(tool => (
              <p
                key={`made-${tool}`}
                className="font-thin text-gray-300 text-sm italic mr-2"
              >
                {tool}
              </p>
            ))}
          </section>
        </div>
        <Image
          src={image}
          alt="slydragon project"
          width={300}
          height={250}
          className="rounded"
        />
      </section>
    </ProjectLayout>
  )
}

export default ProjectItem
