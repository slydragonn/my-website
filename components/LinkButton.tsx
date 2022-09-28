import styled from "styled-components"
import { COLORS } from 'utils'

import { BsArrowRight as RightIcon } from 'react-icons/bs'
import { LinkItem } from "./Hero/Navbar"

interface LinkButtonProps {
  message: string
  href: string
}

const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  color: ${COLORS.white};
  background-color: ${COLORS.orange};
  transition: all .3s;

  &:hover {
    background-color: ${COLORS.blackOrange};
    transform: translateX(5px);
  }
`

const LinkButton = ({ message, href }: LinkButtonProps) => {
  return (
    <div className="flex flex-col w-44 pl-4 pt-2 pb-6 border-l border-t border-[#767676]">
      <span className="mb-3 text-gray-300 font-medium">{message}</span>
      <CustomButton><LinkItem href={href}><RightIcon /></LinkItem></CustomButton>
    </div>
  )
}

export default LinkButton