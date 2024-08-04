import { ShoppingBag } from 'lucide-react'
import { ButtonAction } from './order-pending.styled'
import {
  Popover as PopoverPrimitive,
  PopoverContent,
  PopoverTrigger,
} from './popover-default'
import {
  UpdateOrderPendingContainer,
  UpdateOrderPendingLegth,
} from './update-order-pending.style.'
import { CardOrderPending } from './card-order-pending'
import { Item } from './order-pending'

import * as ScrollArea from '@radix-ui/react-scroll-area'

interface UpdateOrderPendingProps {
  productData?: Item[]
  company: string
}
export function UpdateOrderPending({
  productData,
  company,
}: UpdateOrderPendingProps) {
  return (
    <PopoverPrimitive>
      <PopoverTrigger asChild>
        <ButtonAction status="yellow">
          <ShoppingBag size={24} />
          <UpdateOrderPendingLegth>
            {productData?.length}
          </UpdateOrderPendingLegth>
        </ButtonAction>
      </PopoverTrigger>
      <PopoverContent>
        <ScrollArea.Root asChild>
          <UpdateOrderPendingContainer>
            <ScrollArea.Viewport>
              {productData?.map((product) => {
                return (
                  <CardOrderPending
                    key={product.aplicationId}
                    product={product}
                    company={company}
                  />
                )
              })}
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="horizontal">
              <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar orientation="vertical">
              <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner />
          </UpdateOrderPendingContainer>
        </ScrollArea.Root>
      </PopoverContent>
    </PopoverPrimitive>
  )
}
