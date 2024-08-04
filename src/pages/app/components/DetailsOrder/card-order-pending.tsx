import { Minus, Plus, Trash2 } from 'lucide-react'
import { formatCurrency } from '../../../../utils/currency'
import {
  CardOrderPendingActionContainer,
  CardOrderPendingButton,
  CardOrderPendingButtons,
  CardOrderPendingContainer,
  CardOrderPendingImage,
  CardOrderPendingNameProduct,
  CardOrderPendingPrice,
  CardOrderPendingProduct,
} from './card-order-pending.styled'
import { Item } from './order-pending'
import { ObservationOrderPending } from './observation-order-pending'
import { UseAppContext } from '../../../../context/use.app.context'
import { toast } from 'sonner'

interface CardOrderPendingProps {
  product: Item
  company: string
}

export function CardOrderPending({ product, company }: CardOrderPendingProps) {
  const { updateQuantityItem, updateObservationItem, deleteItemOrder } =
    UseAppContext()

  const handleUpdateQuantityItem = (quantity: number) => {
    updateQuantityItem({ company, product, quantity })
  }

  const handleObservationOrder = (observation?: string) => {
    updateObservationItem({ company, product, observation })
  }

  const handleDeleteItemOrder = () => {
    toast.error(`${product.quantity} x ${product.nameProduct} removido`)
    deleteItemOrder({ company, product })
  }

  return (
    <CardOrderPendingContainer>
      <CardOrderPendingImage
        src={product.imageUrl}
        alt={'imagem ' + product.nameProduct}
      />
      <CardOrderPendingProduct>
        <CardOrderPendingNameProduct>
          {product.nameProduct}
        </CardOrderPendingNameProduct>
        <CardOrderPendingActionContainer>
          <CardOrderPendingButtons>
            <CardOrderPendingButton
              variant="red"
              onClick={() => handleUpdateQuantityItem(-1)}
            >
              <Minus size={15} strokeWidth={3} />
            </CardOrderPendingButton>

            <span>{product.quantity}</span>

            <CardOrderPendingButton
              variant="red"
              onClick={() => handleUpdateQuantityItem(1)}
            >
              <Plus size={15} strokeWidth={3} />
            </CardOrderPendingButton>

            <CardOrderPendingButton
              variant="red"
              onClick={() => handleDeleteItemOrder()}
            >
              <Trash2 size={18} strokeWidth={2} />
            </CardOrderPendingButton>

            <ObservationOrderPending
              product={product}
              handleObservationOrder={handleObservationOrder}
            />
          </CardOrderPendingButtons>
        </CardOrderPendingActionContainer>
      </CardOrderPendingProduct>
      <CardOrderPendingPrice>
        {formatCurrency(product.subtotal)}
      </CardOrderPendingPrice>
    </CardOrderPendingContainer>
  )
}
