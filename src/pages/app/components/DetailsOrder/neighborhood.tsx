import * as Select from '@radix-ui/react-select'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import 'text.css'
export function Neighborhood() {
  return (
    <Select.Root>
      <Select.Trigger className="SelectTrigger" aria-label="Food">
        <Select.Value placeholder="Select a fruit…" />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              <Select.Label className="SelectLabel">Meat</Select.Label>
              <Select.Item value="teste">
                <Select.ItemText>teste</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator"></Select.ItemIndicator>
              </Select.Item>
              <Select.Item value="teste">
                <Select.ItemText>teste</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator"></Select.ItemIndicator>
              </Select.Item>
              <Select.Item value="teste">
                <Select.ItemText>teste</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator"></Select.ItemIndicator>
              </Select.Item>
            </Select.Group>

            <Select.Separator className="SelectSeparator" />

            <Select.Group>
              <Select.Label className="SelectLabel">Meat</Select.Label>
              <Select.Item value="teste">
                <Select.ItemText>teste</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator"></Select.ItemIndicator>
              </Select.Item>
              <Select.Item value="teste">
                <Select.ItemText>teste</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator"></Select.ItemIndicator>
              </Select.Item>
              <Select.Item value="teste">
                <Select.ItemText>teste</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator"></Select.ItemIndicator>
              </Select.Item>
            </Select.Group>

            <Select.Separator className="SelectSeparator" />

            <Select.Group>
              <Select.Label className="SelectLabel">Meat</Select.Label>
              <Select.Item value="teste">
                <Select.ItemText>teste</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator"></Select.ItemIndicator>
              </Select.Item>
              <Select.Item value="teste">
                <Select.ItemText>teste</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator"></Select.ItemIndicator>
              </Select.Item>
              <Select.Item value="teste">
                <Select.ItemText>teste</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator"></Select.ItemIndicator>
              </Select.Item>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
