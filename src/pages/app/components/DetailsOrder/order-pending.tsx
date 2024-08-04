import { useQuery } from '@tanstack/react-query'

import {
  ButtonAction,
  OrderButtonAction,
  OrderItemDetails,
  OrderItemPending,
  OrderPendingContainerWrapper,
  OrderStatus,
} from './order-pending.styled'
import { getCurrentPrices } from '../../../../api/get-current-prices'
import { Skeleton } from '../Skeleton/skeleton.styled'
import { distanceDate } from '../../../../utils/distanceDate'
import { formatCurrency } from '../../../../utils/currency'
import { Check } from 'lucide-react'
import { DeleteOrderPending } from './delete-order-pending'
import { UpdateOrderPending } from './update-order-pending'
import { ItemOrderType } from '../../../../context/app.context'

export interface OrderPendingProps {
  itemOrder: {
    company: string
    date: string
    itens: ItemOrderType[]
  }
}

export interface Item {
  aplicationId: string
  idProduct: number
  nameProduct: string
  quantity: number
  subtotal: number
  observation?: string
  imageUrl?: string
}

interface ProductData {
  total: number
  itens: Item[]
}

export function OrderPending({ itemOrder }: OrderPendingProps) {
  const { date, company, itens } = itemOrder

  const { data: detailsItens, isFetching } = useQuery({
    queryKey: ['current-prices', company],
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
          aplicationId: item.aplicationId,
          idProduct: item.id,
          nameProduct: item.description,
          quantity: item.quantity,
          subtotal: (product?.saleValue || 0) * item.quantity,
          observation: item.observation,
          imageUrl: product?.imageUrl,
        })

        return acc
      },
      {
        total: 0,
        itens: [],
      },
    )
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
            <UpdateOrderPending
              productData={productData?.itens}
              company={company}
            />
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
