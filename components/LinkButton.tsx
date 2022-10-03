import styled from 'styled-components'
import { COLORS } from 'utils'

import { BsArrowRight as RightIcon } from 'react-icons/bs'
import { LinkItem } from './Hero/Navbar'

export const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  color: ${COLORS.white};
  background-color: ${COLORS.orange};
  transition: all 0.3s;

  &:hover {
    background-color: ${COLORS.blackOrange};
    transform: translateX(5px);
  }
`
interface LinkButtonProps {
  message: string
  href: string
  isExternal: boolean
}

export const HomeButton = () => {
  return (
    <div className="flex items-center justify-between w-28 bg-[#1d1d1d] pr-3 rounded mb-20">
      <CustomButton><LinkItem href="/">&#8592;</LinkItem></CustomButton>
      <span className="first-line:text-gray-300 font-thin cursor-default select-none">HOME</span>
    </div>
  )
}

const LinkButton = ({ message, href, isExternal }: LinkButtonProps) => {
  return (
    <div className="flex flex-col w-44 pl-4 pt-2 pb-6 border-l border-t border-[#767676]">
      <span className="mb-3 text-gray-300 font-medium">{message}</span>
      <CustomButton>
        {isExternal ? (
          <a href={href} target="_blank" rel="noreferrer">
            <RightIcon />
          </a>
        ) : (
          <LinkItem href={href}>
            <RightIcon />
          </LinkItem>
        )}
      </CustomButton>
    </div>
  )
}

export default LinkButton
