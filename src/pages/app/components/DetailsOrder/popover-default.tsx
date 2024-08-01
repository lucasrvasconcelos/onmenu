import React, { ReactNode } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger

type PopoverContentProps = {
  children: ReactNode
}

export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  PopoverContentProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content sideOffset={5} {...props} ref={forwardedRef}>
        {children}
        <PopoverPrimitive.Arrow />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
})

PopoverContent.displayName = 'PopoverContent'
