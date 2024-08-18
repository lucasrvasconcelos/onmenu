import * as Select from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'
import {
  NeighborhoodContent,
  NeighborhoodTaxPrice,
  NeighborhoodTrigger,
  NotFoundNeighborhood,
  SelectItem,
  SelectItemIndication,
} from './neighborhood.styled'
import { formatCurrency } from '../../../../utils/currency'
import { Skeleton } from '../Skeleton/skeleton.styled'
import { NeighborhoodType } from './confirm-order'

interface NeighborhoodProps {
  checked: boolean
  neighborhoodData?: NeighborhoodType[]
  handleNeighborhoodActive: (neighborhood: string) => void
  isFetching: boolean
}

export function Neighborhood({
  checked,
  neighborhoodData,
  handleNeighborhoodActive,
  isFetching,
}: NeighborhoodProps) {
  return (
    <Select.Root
      onValueChange={(value) => handleNeighborhoodActive(value)}
      required={checked}
    >
      <Select.Trigger aria-label="Food" asChild>
        <NeighborhoodTrigger className={checked ? 'required' : ''}>
          <Select.Value placeholder="Qual bairro?" />
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
              {isFetching ? (
                <Skeleton height="100px" width="120px" />
              ) : neighborhoodData && neighborhoodData.length > 0 ? (
                neighborhoodData.map(({ id, description, tax }) => {
                  return (
                    <Select.Item
                      value={id.toString()}
                      asChild
                      key={id}
                      title={description}
                    >
                      <SelectItem>
                        <Select.ItemIndicator asChild>
                          <SelectItemIndication>
                            <CheckIcon size={14} />
                          </SelectItemIndication>
                        </Select.ItemIndicator>
                        <Select.ItemText>{description}</Select.ItemText>
                        <NeighborhoodTaxPrice>
                          {formatCurrency(tax)}
                        </NeighborhoodTaxPrice>
                      </SelectItem>
                    </Select.Item>
                  )
                })
              ) : (
                <NotFoundNeighborhood>
                  Nenhum bairro cadastrado
                </NotFoundNeighborhood>
              )}
            </Select.Viewport>
            <Select.ScrollDownButton />
            <Select.Arrow className="arrow" />
          </NeighborhoodContent>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
