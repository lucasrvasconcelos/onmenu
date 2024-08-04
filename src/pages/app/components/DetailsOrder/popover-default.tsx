import React, { ReactNode } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { PopoverArrow } from './popover-default.styled'

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
      <PopoverPrimitive.Content
        sideOffset={8}
        {...props}
        ref={forwardedRef}
        collisionPadding={{
          right: 20,
          left: 20,
        }}
      >
        {children}
        <PopoverArrow />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
})

PopoverContent.displayName = 'PopoverContent'
