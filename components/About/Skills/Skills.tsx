import SkillSlider from './Slider'

const frontendSkills = [
  'javascript',
  'typescript',
  'html',
  'css',
  'sass',
  'react',
  'nextjs',
  'gatsby',
  'vue',
  'tailwind'
]
const backendSkills = ['nodejs', 'express', 'python', 'django']
const toolsSkills = ['git', 'figma', 'vscode', 'vim', 'inkscape', 'notion']

const Skills = () => {
  return (
    <section className="w-full flex flex-col mt-8">
      <h2 className="text-gray-300 mb-8 text-lg font-semibold">
        Skills & Tools
      </h2>
      <SkillSlider text="FRONTEND" skills={frontendSkills} />
      <SkillSlider text="BACKEND" skills={backendSkills} />
      <SkillSlider text="TOOLS" skills={toolsSkills} />
    </section>
  )
}

export default Skills
