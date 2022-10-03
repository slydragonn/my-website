import { ReactNode } from 'react'
import styled from 'styled-components'

const GridSection = styled.section`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr 250px min-content 250px;
  margin-top: 24px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 65px 1fr;
  }
`
interface GridLayoutProps {
  children: ReactNode
}

const GridLayout = ({ children }: GridLayoutProps) => {
  return <GridSection>{children}</GridSection>
}

export default GridLayout
