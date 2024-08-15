import { useState } from 'react'
import { Neighborhood } from './neighborhood'
import { formatCurrency } from '../../../../utils/currency'
import { NeighborhoodTaxContainer, TaxValue } from './neighborhood-tax.styled'
import { useQuery } from '@tanstack/react-query'
import { getNeighborhood } from '../../../../api/get-neighborhood'
import { useParams } from 'react-router-dom'

interface NeighborhoodTaxProps {
  checked: boolean
  total: number
}

export interface NeighborhoodType {
  neighborhoodId: number
  neighborhoodName: string
  neighborhoodTax: number
}

export function NeighborhoodTax({ checked, total }: NeighborhoodTaxProps) {
  const ApiNeighborhood: NeighborhoodType[] = [
    {
      neighborhoodId: 1,
      neighborhoodName: 'Bom jardim',
      neighborhoodTax: 8,
    },
    {
      neighborhoodId: 2,
      neighborhoodName: 'Pici',
      neighborhoodTax: 2,
    },
    {
      neighborhoodId: 3,
      neighborhoodName: 'Granja portugal',
      neighborhoodTax: 10,
    },
    {
      neighborhoodId: 4,
      neighborhoodName: 'Centro',
      neighborhoodTax: 7,
    },
  ]
  const params = useParams()

  const { data: neighborhoodData } = useQuery({
    queryKey: ['neighborhood'],
    queryFn: () => getNeighborhood({ company: params.company }),
  })

  const [neighborhoodActive, setNeighborhoodActive] =
    useState<NeighborhoodType>()

  function handleNeighborhoodActive(neighborhoodId: string) {
    const neighborhoodActive = neighborhoodData?.data?.find(
      (neighborhood) =>
        neighborhood.neighborhoodId.toString() === neighborhoodId,
    )

    setNeighborhoodActive(neighborhoodActive)
  }

  return (
    <NeighborhoodTaxContainer>
      <Neighborhood
        checked={checked}
        neighborhoodOptions={ApiNeighborhood}
        handleNeighborhoodActive={handleNeighborhoodActive}
      />
      <TaxValue>
        {formatCurrency(
          total + (checked ? neighborhoodActive?.neighborhoodTax || 0 : 0),
        )}
      </TaxValue>
    </NeighborhoodTaxContainer>
  )
}
