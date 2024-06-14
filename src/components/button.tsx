import { ButtonDefault, VariantsType } from './button.styled'

interface ButtonProps {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  variant?: VariantsType
}

export function Button({ children, onClick, variant }: ButtonProps) {
  return (
    <ButtonDefault onClick={onClick} variant={variant}>
      {children}
    </ButtonDefault>
  )
}
