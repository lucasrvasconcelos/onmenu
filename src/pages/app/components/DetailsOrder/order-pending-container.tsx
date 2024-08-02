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
import { Check } from 'lucide-react'
import { DeleteOrderPending } from './delete-order-pending'
import { UpdateOrderPending } from './update-order-pending'

interface OrderPendingContainerProps {
  itemOrder: {
    company: string
    date: string
    itens: ItensOrderType[]
  }
}

interface Item {
  nomeProduct: string
  quantity: number
  subtotal: number
}

interface ProductData {
  total: number
  itens: Item[]
}

export function OrderPendingContainer({
  itemOrder,
}: OrderPendingContainerProps) {
  const { date, company, itens } = itemOrder

  const { data: detailsItens, isFetching } = useQuery({
    queryKey: ['current-prices', company, itens],
    queryFn: () => getCurrentPrices({ company, itens }),
  })

  let productData

  if (detailsItens) {
    productData = itens.reduce<ProductData>(
      (acc, item) => {
        const product = detailsItens?.data.prices.find(
          (product) => item.id === product.id,
        )

        acc.total += (product?.saleValue || 0) * item.quantity

        acc.itens.push({
          nomeProduct: item.description,
          quantity: item.quantity,
          subtotal: (product?.saleValue || 0) * item.quantity,
        })

        return acc
      },
      {
        total: 0,
        itens: [],
      },
    )
    console.log(productData)
  }

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
            <span>{formatCurrency(productData?.total || 0)}</span>
          )}
        </OrderItemDetails>

        <OrderButtonAction>
          {isFetching ? (
            <Skeleton width="26px" height="26px" padding="0" margin="0" />
          ) : (
            <UpdateOrderPending />
          )}

          {isFetching ? (
            <Skeleton width="26px" height="26px" padding="0" margin="0" />
          ) : (
            <DeleteOrderPending company={company} />
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
