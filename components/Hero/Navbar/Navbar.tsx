import Link from 'next/link'
import styled, { keyframes } from 'styled-components'

interface LinkItemProps {
  href: string
  children: string
}

const LinkItem = ({ children, href }: LinkItemProps) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  )
}

const show = keyframes`
 from {
    opacity: 0;
    transform: translateX(40px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`

const ListItem = styled.li`
  animation: ${show} 1s;
  transition: transform 0.3s, font-weight 0.2s, color 0.3s, font-size 0.3s;

  &:hover {
    transform: translateX(-40px);
    font-weight: 400;
  }
`

const Navbar = () => {
  return (
    <nav>
      <ul className="z-20 relative text-white font-thin sm:text-7xl md:text-8xl text-6xl text-right">
        <ListItem>
          <LinkItem href="#">ABOUT</LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem href="#">PROJECTS</LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem href="#">POSTS</LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem href="#">BLOG</LinkItem>
        </ListItem>
      </ul>
    </nav>
  )
}

export default Navbar
