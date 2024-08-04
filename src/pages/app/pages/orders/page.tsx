import { UseAppContext } from '../../../../context/use.app.context'
import { OrderPending } from '../../components/DetailsOrder/order-pending'
import { NotFindOrders, OrdersContainer, OrdersPending } from './page.styled'

export function Orders() {
  const { itensOrder } = UseAppContext()

  return (
    <OrdersContainer>
      <OrdersPending>
        <div>
          <span>Seus pedidos</span>
        </div>

        {itensOrder?.map((itemOrder) => {
          return <OrderPending key={itemOrder.company} itemOrder={itemOrder} />
        })}

        {itensOrder?.length === 0 && (
          <NotFindOrders>
            <span>Nenhum pedido encontrado 😓</span>
          </NotFindOrders>
        )}
      </OrdersPending>
    </OrdersContainer>
  )
}
