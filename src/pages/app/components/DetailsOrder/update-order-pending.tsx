import { ShoppingBag } from 'lucide-react'
import { ButtonAction } from './order-pending-container.styled'
import { Popover, PopoverContent, PopoverTrigger } from './popover-default'
import { UpdateOrderPendingContainer } from './update-order-pending.style.'

export function UpdateOrderPending() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <ButtonAction status="yellow">
          <ShoppingBag size={24} />
        </ButtonAction>
      </PopoverTrigger>
      <PopoverContent>
        <UpdateOrderPendingContainer> TESTE </UpdateOrderPendingContainer>
      </PopoverContent>
    </Popover>
  )
}
