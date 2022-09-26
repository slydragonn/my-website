/* eslint-disable @next/next/no-img-element */
import { CgArrowLongDown as DownIcon } from 'react-icons/cg'
import Navbar from "./Navbar"
import ScrollingText from './ScrollingText'

const HeroSection = () => {
  return (
    <header className="relative flex justify-between items-center w-full h-[570px] overflow-y-hidden md:px-14 px-7 border-b border-gray-400">
      <ScrollingText text='ALEJANDRO LONDOÑO' position='top' direction='right'/>
      <DownIcon className='w-12 h-16 text-white'/>
      <img
        src='/dragon.png'
        alt='Dragon illustration'
        className="z-10 absolute bottom-0 left-[15%] sm:block hidden md:w-[550px] w-[80%] self-start"
      />
      <Navbar />
      <ScrollingText text='FRONT-END DEVELOPER' position='bottom' direction='left'/>
    </header>
  )
}

export default HeroSection