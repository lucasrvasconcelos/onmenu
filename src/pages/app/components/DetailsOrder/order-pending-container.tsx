import { useQuery } from '@tanstack/react-query'
import { ItensOrderType } from '../../../../context/app.context'
import {
  ButtonAction,
  OrderButtonAction,
  OrderItemDetails,
  OrderItemPending,
  OrderPendingContainerWrapper,
  OrderStatus,
} from './order-pending-container.styled'
import { getCurrentPrices } from '../../../../api/get-current-prices'
import { Skeleton } from '../Skeleton/skeleton.styled'
import { distanceDate } from '../../../../utils/distanceDate'
import { formatCurrency } from '../../../../utils/currency'
import { Check, ShoppingBag } from 'lucide-react'
import { DeleteOrderPending } from './delete-order-pending'

interface OrderPendingContainerProps {
  itemOrder: {
    company?: string
    date: string
    itens: ItensOrderType[]
  }
}
export function OrderPendingContainer({
  itemOrder,
}: OrderPendingContainerProps) {
  const { date, company, itens } = itemOrder

  const { data: detailsItens, isFetching } = useQuery({
    queryKey: ['current-prices', company, itens],
    queryFn: () => getCurrentPrices({ company, itens }),
  })

  const subtotal = itens.reduce((acc, item) => {
    const product = detailsItens?.data.prices.find((product) => {
      if (item.id === product.id) {
        return product
      }
      return false
    })
    return acc + (product?.saleValue || 0) * item.quantity
  }, 0)

  return (
    <OrderPendingContainerWrapper>
      <OrderItemPending>
        <OrderItemDetails>
          {!isFetching && <OrderStatus>Confirme o pedido</OrderStatus>}

          {isFetching ? (
            <Skeleton width="130px" height="18px" margin="8px 0 4px 0" />
          ) : (
            <span>{detailsItens?.data?.company.fantasyName}</span>
          )}

          {isFetching ? (
            <Skeleton width="40px" height="14px" padding="0" margin="2px 0" />
          ) : (
            <span>{distanceDate(date)}</span>
          )}

          {isFetching ? (
            <Skeleton width="80px" height="25px" padding="0" margin="2px 0" />
          ) : (
            <span>{formatCurrency(subtotal || 0)}</span>
          )}
        </OrderItemDetails>

        <OrderButtonAction>
          {isFetching ? (
            <Skeleton width="26px" height="26px" padding="0" margin="0" />
          ) : (
            <ButtonAction status="yellow">
              <ShoppingBag size={24} />
            </ButtonAction>
          )}

          {isFetching ? (
            <Skeleton width="26px" height="26px" padding="0" margin="0" />
          ) : (
            <DeleteOrderPending company={detailsItens?.data.company} />
          )}

          {isFetching ? (
            <Skeleton width="26px" height="26px" padding="0" margin="0" />
          ) : (
            <ButtonAction status="green">
              <Check size={24} />
            </ButtonAction>
          )}
        </OrderButtonAction>
      </OrderItemPending>
    </OrderPendingContainerWrapper>
  )
}
