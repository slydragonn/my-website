import Link from 'next/link'
import { ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'

interface LinkItemProps {
  href: string
  children: string | ReactNode
}

export const LinkItem = ({ children, href }: LinkItemProps) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  )
}

const show = keyframes`
 from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

const ListItem = styled.li`
  animation: ${show} 1s;
  transition: all .3s;

  &:hover {
    transform: translateY(-5px);
  }
`

const Navbar = () => {
  return (
    <nav>
      <ul className="z-20 absolute top-0 left-0 bottom-0 right-0 m-auto flex justify-around items-center rounded w-[320px] h-[70px] text-white font-thin bg-[#181818]/30 backdrop-blur">
        <ListItem>
          <LinkItem href="/#">about</LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem href="/#">projects</LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem href="/#">posts</LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem href="/#">blog</LinkItem>
        </ListItem>
      </ul>
    </nav>
  )
}

export default Navbar
