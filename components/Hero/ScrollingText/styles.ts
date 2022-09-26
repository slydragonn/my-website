import styled, { keyframes } from 'styled-components'
import { COLORS } from 'utils'

const scrollingLeft = keyframes`
  from {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
`
const scrollingRight = keyframes`
  from {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  to {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
`

export type Position = 'top' | 'bottom'
export type Direction = 'left' | 'right'

interface ScrollContainerProps {
  position: Position
}

export const ScrollContainer = styled.section<ScrollContainerProps>`
  z-index: 0;
  position: absolute;
  top: ${props => (props.position === 'top' ? 0 : 'none')};
  bottom: ${props => (props.position === 'bottom' ? 0 : 'none')};
  left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
`

interface ScrollTextProps {
  direction: Direction
}

export const ScrollText = styled.div<ScrollTextProps>`
  min-width: 1200px;
  overflow: hidden;
  color: transparent;
  background-image: linear-gradient(0deg, ${COLORS.yellow}, ${COLORS.orange});
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;

  -moz-transform: translateX(
    ${props => (props.direction === 'left' ? '100%' : '-100%')}
  );
  -webkit-transform: translateX(
    ${props => (props.direction === 'left' ? '100%' : '-100%')}
  );
  transform: translateX(
    ${props => (props.direction === 'left' ? '100%' : '-100%')}
  );

  -moz-animation: ${props =>
      props.direction === 'left' ? scrollingLeft : scrollingRight}
    10s linear infinite;
  -webkit-animation: ${props =>
      props.direction === 'left' ? scrollingLeft : scrollingRight}
    10s linear infinite;
  animation: ${props =>
      props.direction === 'left' ? scrollingLeft : scrollingRight}
    10s linear infinite;
`
