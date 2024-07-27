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
import { formatCurrency } from '../../../../utils/currency'
import { UseAppContext } from '../../../../context/use.app.context'

export function Orders() {
  const { itensOrder } = UseAppContext()
  return (
    <OrdersContainer>
      <OrdersPending>
        <span>Seus pedidos</span>
        <OrderItemPending>
          <OrderItemDetails>
            <OrderStatus>Confirme o pedido</OrderStatus>
            <span>CRT Sistemas CRT Sistemas CRT SistemasCRT Sistemas</span>
            <span>há 1 minuto</span>
            <span>{formatCurrency(15)}</span>
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
        <OrderItemPending>
          <OrderItemDetails>
            <OrderStatus>Confirme o pedido</OrderStatus>
            <span>CRT Sistemas CRT Sistemas CRT SistemasCRT Sistemas</span>
            <span>há 1 minuto</span>
            <span>{formatCurrency(15)}</span>
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

        <OrderItemPending>
          <OrderItemDetails>
            <OrderStatus>Confirme o pedido</OrderStatus>
            <span>CRT Sistemas CRT Sistemas CRT SistemasCRT Sistemas</span>
            <span>há 1 minuto</span>
            <span>{formatCurrency(15)}</span>
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
      </OrdersPending>
    </OrdersContainer>
  )
}
