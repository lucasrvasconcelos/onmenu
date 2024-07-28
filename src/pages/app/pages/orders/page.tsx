import { Check, ShoppingBag } from 'lucide-react'
import {
  ButtonAction,
  OrderButtonAction,
  OrderItemDetails,
  OrderItemPending,
  OrdersContainer,
  OrdersPending,
  OrderStatus,
} from './page.styled'
import { UseAppContext } from '../../../../context/use.app.context'
import { DetailsOrder } from '../../components/DetailsOrder/details-order'

export function Orders() {
  const { itensOrder } = UseAppContext()

  console.log(itensOrder)
  return (
    <OrdersContainer>
      <OrdersPending>
        <span>Seus pedidos</span>

        {itensOrder.map((ItemOrder) => {
          return (
            <OrderItemPending key={ItemOrder.company}>
              <OrderItemDetails>
                <OrderStatus>Confirme o pedido</OrderStatus>
                <DetailsOrder ItemOrder={ItemOrder} date={ItemOrder.date} />
              </OrderItemDetails>

              <OrderButtonAction>
                <ButtonAction status="pending">
                  <ShoppingBag size={24} />
                </ButtonAction>
                <ButtonAction status="finish">
                  <Check size={24} />
                </ButtonAction>
              </OrderButtonAction>
            </OrderItemPending>
          )
        })}
      </OrdersPending>
    </OrdersContainer>
  )
}
