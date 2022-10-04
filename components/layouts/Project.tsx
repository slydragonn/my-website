import { ReactNode } from 'react'

interface ProjectLayoutProps {
  children: ReactNode
}

const ProjectLayout = ({ children }: ProjectLayoutProps) => {
  return (
    <section data-aos="fade-right" data-aos-once="true" className="w-full lg:w-[800px] h-auto py-4 px-2 sm:px-9 bg-[#1d1d1d] rounded mb-14">
      {children}
    </section>
  )
}

export default ProjectLayout
