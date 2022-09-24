import { ReactNode } from "react"

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <main className="p-10">
      {
        children
      }
    </main>
  )
}

export default MainLayout