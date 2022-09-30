import { ReactNode } from 'react'

interface GridItemProps {
  children: ReactNode
}

const GridItem = ({children}: GridItemProps) => {
  return (
    <div className='h-auto border-l border-l-[#767676] sm:pl-20 pl-6 sm:pb-28 pb-20'>
      {children}
    </div>
  )
}

export default GridItem