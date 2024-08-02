import { ShoppingBag } from 'lucide-react'
import { ButtonAction } from './order-pending-container.styled'
import {
  Popover as PopoverPrimitive,
  PopoverContent,
  PopoverTrigger,
} from './popover-default'
import { UpdateOrderPendingContainer } from './update-order-pending.style.'

export function UpdateOrderPending() {
  return (
    <PopoverPrimitive>
      <PopoverTrigger asChild>
        <ButtonAction status="yellow">
          <ShoppingBag size={24} />
        </ButtonAction>
      </PopoverTrigger>
      <PopoverContent>
        <UpdateOrderPendingContainer>TESTE</UpdateOrderPendingContainer>
      </PopoverContent>
    </PopoverPrimitive>
  )
}
