import * as Select from '@radix-ui/react-select'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { NeighborhoodTrigger } from './neighborhood.styled'
export function Neighborhood() {
  return (
    <Select.Root>
      <Select.Trigger className="SelectTrigger" aria-label="Food" asChild>
        <NeighborhoodTrigger>
          <Select.Value placeholder="Select a fruit…" />
          <Select.Icon className="SelectIcon">
            <ChevronDownIcon />
          </Select.Icon>
        </NeighborhoodTrigger>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton />
          <Select.Viewport>
            <Select.Item value="01">
              <Select.ItemText>teste 01</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item value="01">
              <Select.ItemText>teste 01</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item value="01">
              <Select.ItemText>teste 01</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item value="01">
              <Select.ItemText>teste 01</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>

            <Select.Separator />
          </Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
