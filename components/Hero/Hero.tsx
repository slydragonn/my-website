/* eslint-disable @next/next/no-img-element */

import styled from 'styled-components'
import { COLORS } from 'utils'
import Navbar from './Navbar'

const GradientText = styled.p`
  color: transparent;
  text-align: center;
  background-image: linear-gradient(0deg, ${COLORS.yellow}, ${COLORS.orange});
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  margin-bottom: 10px;
  border-top: 1px solid ${COLORS.gray};
  border-bottom: 1px solid ${COLORS.gray};
`

const HeroSection = () => {
  return (
    <header className="relative flex  justify-center items-center w-full h-[100vh] py-4 border-b border-gray-400">
      <Navbar />
      <section className="w-full text-6xl sm:text-[85px] md:text-[100px] font-black text-center transition-all select-none">
        <GradientText>ALEJANDRO</GradientText>
        <GradientText>LONDOÑO</GradientText>
        <GradientText>FRONT-END</GradientText>
        <GradientText>DEVELOPER</GradientText>
      </section>
    </header>
  )
}

export default HeroSection
