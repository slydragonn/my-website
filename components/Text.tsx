interface TextProps {
  children: string
}

const Text = ({children}: TextProps) => {
  return (
    <h2 className="text-gray-300 md:text-lg text-sm font-thin transition-all">
      {children}
    </h2>
  )
}

export default Text