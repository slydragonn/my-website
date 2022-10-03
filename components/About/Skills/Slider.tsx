import styled from "styled-components"
import { COLORS } from "utils"
import getSkillComponent from "./Icons"

const CustomDiv = styled.div`
  position: relative;
  width: calc(100% - 100px);
  height: 100%;
`

const Scroll = styled.div`
  z-index: 0;
  position: absolute;
  inset: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 7px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${COLORS.gray};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.blackOrange};
  border-radius: 5px;
  }
`

interface SliderProps {
  text: string
  skills: string[]
}

const SkillSlider = ({text, skills}: SliderProps) => {
  return (
    <div className="relative w-full h-[100px] mt-10">
      <div className="z-10 relative flex w-full h-full items-center bg-[#1d1d1d] rounded-sm shadow transition-all px-4">
        <div className="w-[100px]">
        <p className="z-10 relative font-thin text-gray-300">{text}</p>
        </div>
        <CustomDiv>
          <Scroll>
            {
              skills.map(skill => (
                <div key={skill} className='flex flex-col justify-center items-center text-white mx-14'>
                  {getSkillComponent(skill, 'w-[40px] h-[40px]')}
                  <p className="text-sm font-thin">{skill}</p>
                </div>
              ))
            }
          </Scroll>
        </CustomDiv>
      </div>
    </div>
  )
}

export default SkillSlider