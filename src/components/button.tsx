import { ButtonDefault } from './button.styled'

interface ButtonProps {
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function Button({ children, onClick }: ButtonProps) {
  return <ButtonDefault onClick={onClick}>{children}</ButtonDefault>
}
