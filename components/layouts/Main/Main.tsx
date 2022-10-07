import { ReactNode } from 'react'
import styled from 'styled-components'
import { COLORS } from 'utils'

interface MainLayoutProps {
  children: ReactNode
}

const Main = styled.main`
  background-color: ${COLORS.black};
  background-image: url('/bg.png');
  padding: 40px;
  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`

const MainLayout = ({ children }: MainLayoutProps) => {
  return <Main>{children}</Main>
}

export default MainLayout
