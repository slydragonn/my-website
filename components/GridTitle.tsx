interface GridTitleProps {
  children: string
}

const GridTitle = ({ children }: GridTitleProps) => {
  return <h2 className="text-gray-300 sm:text-xl text-base">{children}</h2>
}

export default GridTitle
