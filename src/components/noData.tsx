import { ReactNode } from 'react'

interface NoDataProps {
  children: ReactNode
}

export function NoData({ children }: NoDataProps) {
  return <span>{children}</span>
}
