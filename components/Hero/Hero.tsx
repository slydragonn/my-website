/* eslint-disable @next/next/no-img-element */

import styled from 'styled-components'
import { COLORS } from 'utils'
import Navbar from './Navbar'

const GradientText = styled.p`
  margin-bottom: 10px;
  border-top: 1px solid ${COLORS.gray};
  border-bottom: 1px solid ${COLORS.gray};
  & > div {
    color: transparent;
  text-align: center;
  background-image: linear-gradient(0deg, ${COLORS.yellow}, ${COLORS.orange});
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  }
`

const HeroSection = () => {
  return (
    <header className="relative flex  justify-center items-center w-full h-[100vh] py-4 border-b border-gray-400">
      <Navbar />
      <section className="w-full text-6xl sm:text-[85px] md:text-[100px] font-black text-center transition-all select-none">
        <GradientText><div data-aos="fade-left" data-aos-once="true">ALEJANDRO</div></GradientText>
        <GradientText><div data-aos="fade-right" data-aos-delay="300" data-aos-once="true">LONDOÑO</div></GradientText>
        <GradientText><div data-aos="fade-left" data-aos-delay="600" data-aos-once="true">FRONT-END</div></GradientText>
        <GradientText><div data-aos="fade-right" data-aos-delay="900" data-aos-once="true">DEVELOPER</div></GradientText>
      </section>
    </header>
  )
}

export default HeroSection
