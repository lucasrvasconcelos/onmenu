import { UseAppContext } from '../../../../context/use.app.context'
import { OrderPendingContainer } from '../../components/DetailsOrder/order-pending-container'
import { OrdersContainer, OrdersPending } from './page.styled'

export function Orders() {
  const { itensOrder } = UseAppContext()

  return (
    <OrdersContainer>
      <OrdersPending>
        <span>Seus pedidos</span>

        {itensOrder.map((itemOrder) => {
          return (
            <OrderPendingContainer
              key={itemOrder.company}
              itemOrder={itemOrder}
            />
          )
        })}
      </OrdersPending>
    </OrdersContainer>
  )
}
