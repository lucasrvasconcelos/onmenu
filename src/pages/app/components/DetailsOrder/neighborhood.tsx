import * as Select from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'
import {
  NeighborhoodContent,
  NeighborhoodTaxPrice,
  NeighborhoodTrigger,
  SelectItem,
  SelectItemIndication,
} from './neighborhood.styled'
import { NeighborhoodType } from './neighborhood-tax'
import { formatCurrency } from '../../../../utils/currency'

interface NeighborhoodProps {
  checked: boolean
  neighborhoodOptions: NeighborhoodType[]
  handleNeighborhoodActive: (neighborhood: string) => void
}

export function Neighborhood({
  checked,
  neighborhoodOptions,
  handleNeighborhoodActive,
}: NeighborhoodProps) {
  return (
    <Select.Root
      onValueChange={(value) => handleNeighborhoodActive(value)}
      required={checked}
    >
      <Select.Trigger aria-label="Food" asChild>
        <NeighborhoodTrigger className={checked ? 'required' : ''}>
          <Select.Value placeholder="Bairro" />
          <Select.Icon>
            <ChevronDownIcon size={14} />
          </Select.Icon>
        </NeighborhoodTrigger>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content asChild position="popper">
          <NeighborhoodContent>
            <Select.ScrollUpButton />
            <Select.Viewport>
              {neighborhoodOptions.length > 0
                ? neighborhoodOptions.map(
                    ({ neighborhoodId, neighborhoodName, neighborhoodTax }) => {
                      return (
                        <Select.Item
                          value={neighborhoodId.toString()}
                          asChild
                          key={neighborhoodId}
                        >
                          <SelectItem>
                            <Select.ItemIndicator asChild>
                              <SelectItemIndication>
                                <CheckIcon size={14} />
                              </SelectItemIndication>
                            </Select.ItemIndicator>
                            <Select.ItemText>
                              {neighborhoodName}
                            </Select.ItemText>
                            <NeighborhoodTaxPrice>
                              {formatCurrency(neighborhoodTax)}
                            </NeighborhoodTaxPrice>
                          </SelectItem>
                        </Select.Item>
                      )
                    },
                  )
                : 'Nenhum bairro cadastrado'}
            </Select.Viewport>
            <Select.ScrollDownButton />
            <Select.Arrow className="arrow" />
          </NeighborhoodContent>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
