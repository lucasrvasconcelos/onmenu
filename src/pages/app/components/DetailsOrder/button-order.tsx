import { ButtonOrder } from './button-order.styled'

interface ButtonOrderActionProps {
  color: 'green' | 'red' | 'yellow' | 'white'
  onClick: () => void
  children: React.ReactNode
}
export function ButtonOrderAction({
  color,
  children,
  ...rest
}: ButtonOrderActionProps) {
  return (
    <ButtonOrder variant={color} {...rest}>
      {children}
    </ButtonOrder>
  )
}
