import { ButtonDefault } from './button.styled'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ children, onClick }: ButtonProps) {
  return <ButtonDefault onClick={onClick}>{children}</ButtonDefault>
}
