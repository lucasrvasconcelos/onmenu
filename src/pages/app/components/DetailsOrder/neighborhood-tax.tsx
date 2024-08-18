import { Neighborhood } from './neighborhood'
import { formatCurrency } from '../../../../utils/currency'
import { NeighborhoodTaxContainer, TaxValue } from './neighborhood-tax.styled'
import { useQuery } from '@tanstack/react-query'
import { getNeighborhood } from '../../../../api/get-neighborhood'
import { useParams } from 'react-router-dom'
import { NeighborhoodType } from './confirm-order'

interface NeighborhoodTaxProps {
  checked: boolean
  total: number
  setNeighborhood: (neighborhood?: NeighborhoodType) => void
  neighborhood?: NeighborhoodType
}

export function NeighborhoodTax({
  checked,
  total,
  neighborhood,
  setNeighborhood,
}: NeighborhoodTaxProps) {
  const { companytag } = useParams<{ companytag: string }>()
  const { data: neighborhoodData, isFetching } = useQuery({
    queryKey: ['neighborhood', companytag],
    queryFn: () => getNeighborhood({ company: companytag }),
  })

  function handleNeighborhoodActive(neighborhoodId: string) {
    const neighborhoodActive = neighborhoodData?.data?.find(
      (neighborhood) => neighborhood.id.toString() === neighborhoodId,
    )

    setNeighborhood(neighborhoodActive)
  }

  return (
    <NeighborhoodTaxContainer>
      <Neighborhood
        checked={checked}
        neighborhoodData={neighborhoodData?.data}
        handleNeighborhoodActive={handleNeighborhoodActive}
        isFetching={isFetching}
      />
      <TaxValue>
        {formatCurrency(total + (checked ? neighborhood?.tax || 0 : 0))}
      </TaxValue>
    </NeighborhoodTaxContainer>
  )
}
