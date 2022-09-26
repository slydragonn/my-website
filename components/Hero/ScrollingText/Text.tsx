import { Direction, Position, ScrollContainer, ScrollText } from './styles'


interface ScrollingTextProps {
  text: string
  direction: Direction
  position: Position
}

const ScrollingText = ({text, direction, position}: ScrollingTextProps) => {
  return (
    <ScrollContainer position={position}>
      <ScrollText direction={direction} className="text-white text-9xl font-black tracking-[40px] text-start">{text}</ScrollText>
    </ScrollContainer>
  )
}

export default ScrollingText