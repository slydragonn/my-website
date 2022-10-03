import {
  SiCss3 as CssIcon,
  SiDjango as DjangoIcon,
  SiExpress as ExpressIcon,
  SiFigma as FigmaIcon,
  SiGatsby as GatsbyIcon,
  SiGit as GitIcon,
  SiHtml5 as HtmlIcon,
  SiInkscape as InkscapeIcon,
  SiJavascript as JavaScriptIcon,
  SiNextdotjs as NextIcon,
  SiNodedotjs as NodeIcon,
  SiNotion as NotionIcon,
  SiPython as PythonIcon,
  SiReact as ReactIcon,
  SiSass as SassIcon,
  SiTailwindcss as TailwindIcon,
  SiTypescript as TypeScriptIcon,
  SiVim as VimIcon,
  SiVisualstudiocode as VSCodeIcon,
  SiVuedotjs as VueIcon
} from 'react-icons/si'

export default function getSkillComponent(name:string, tailwindStyles:string) {
  switch(name) {
    case 'typescript':
      return <TypeScriptIcon className={tailwindStyles}/>
    case 'javascript':
      return <JavaScriptIcon className={tailwindStyles}/>
    case 'html':
      return <HtmlIcon className={tailwindStyles}/>
    case 'css':
      return <CssIcon className={tailwindStyles}/>
    case 'sass':
      return <SassIcon className={tailwindStyles}/>
    case 'react':
      return <ReactIcon className={tailwindStyles}/>
    case 'nextjs':
      return <NextIcon className={tailwindStyles}/>
    case 'gatsby':
      return <GatsbyIcon className={tailwindStyles}/>
    case 'vue':
      return <VueIcon className={tailwindStyles}/>
    case 'tailwind':
      return <TailwindIcon className={tailwindStyles}/>
    case 'nodejs':
      return <NodeIcon className={tailwindStyles}/>
    case 'express':
      return <ExpressIcon className={tailwindStyles}/>
    case 'python':
      return <PythonIcon className={tailwindStyles}/>
    case 'django':
      return <DjangoIcon className={tailwindStyles}/>
    case 'git':
      return <GitIcon className={tailwindStyles}/>
    case 'figma':
      return <FigmaIcon className={tailwindStyles}/>
    case 'vscode':
      return <VSCodeIcon className={tailwindStyles}/>
    case 'vim':
      return <VimIcon className={tailwindStyles}/>
    case 'inkscape':
      return <InkscapeIcon className={tailwindStyles}/>
    case 'notion':
     return <NotionIcon className={tailwindStyles}/>
    default:
      return undefined
  }
}