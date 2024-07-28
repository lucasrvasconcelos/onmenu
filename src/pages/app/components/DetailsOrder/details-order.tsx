import { useQuery } from '@tanstack/react-query'
import { getCurrentPrices } from '../../../../api/get-current-prices'
import { ItensForCompany } from '../../../../context/app.context'
import { formatCurrency } from '../../../../utils/currency'
import { distanceDate } from '../../../../utils/distanceDate'

interface DetailsOrderProps {
  ItemOrder: ItensForCompany
  date: string
}

export function DetailsOrder({ ItemOrder, date }: DetailsOrderProps) {
  const { company, itens } = ItemOrder

  const { data: detailsItens } = useQuery({
    queryKey: ['current-prices', company, itens],
    queryFn: () => getCurrentPrices({ company, itens }),
  })

  if (!detailsItens) {
    console.log('Erro ao obter dados do pedido - details-order.tsx')
    return (
      <>
        <span>Erro ao obter dados do pedido - details-order.tsx</span>
        <span>Erro ao obter dados do pedido - details-order.tsx</span>
        <span>Erro ao obter dados do pedido - details-order.tsx</span>
      </>
    )
  }

  const subtotal = itens.reduce((acc, item) => {
    const product = detailsItens.data.prices.find((product) => {
      if (item.id === product.id) {
        return product
      }
      return false
    })
    return acc + (product?.saleValue || 0) * item.quantity
  }, 0)

  return (
    <>
      <span>{detailsItens?.data?.company.fantasyName}</span>
      <span>{distanceDate(date)}</span>
      <span>{formatCurrency(subtotal)}</span>
    </>
  )
}
