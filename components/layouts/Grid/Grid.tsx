import { ReactNode } from 'react'
import styled from "styled-components"

const GridSection = styled.section`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: repeat(4, 1fr);
  margin-top: 24px;
`
interface GridLayoutProps {
  children: ReactNode
}

const GridLayout = ({children}:GridLayoutProps) => {
  return (
    <GridSection>
      {children}
    </GridSection>
  )
}

export default GridLayout