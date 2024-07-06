import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LinkAppProps {
  children: ReactNode
  to: string
}
export function LinkApp({ children, to }: LinkAppProps) {
  const { pathname } = useLocation()
  return <Link to={`${pathname + to}`}>{children}</Link>
}
