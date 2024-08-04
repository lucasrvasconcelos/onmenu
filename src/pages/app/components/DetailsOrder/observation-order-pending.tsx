import * as Dialog from '@radix-ui/react-dialog'

import { NotepadText } from 'lucide-react'
import {
  ObservationOrderPendingAction,
  ObservationOrderPendingContainer,
  ObservationOrderPendingInput,
  ObservationOrderPendingOverlay,
} from './observation-order-pending.styled'
import { CardOrderPendingButton } from './card-order-pending.styled'
import { Item } from './order-pending'

interface ObservationOrderPendingProps {
  product: Item
  handleObservationOrder: (observation?: string) => void
}

export function ObservationOrderPending({
  product,
  handleObservationOrder,
}: ObservationOrderPendingProps) {
  const { observation, quantity, nameProduct } = product

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CardOrderPendingButton variant="blue">
          <NotepadText size={18} strokeWidth={2} />
        </CardOrderPendingButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <ObservationOrderPendingOverlay>
            <Dialog.Content asChild>
              <ObservationOrderPendingContainer>
                <Dialog.Title asChild>
                  <span>
                    {quantity} x {nameProduct}
                  </span>
                </Dialog.Title>
                <ObservationOrderPendingInput
                  value={observation}
                  onChange={(event) =>
                    handleObservationOrder(event.target.value)
                  }
                ></ObservationOrderPendingInput>

                <ObservationOrderPendingAction>
                  <Dialog.Close asChild>
                    <button>Concluir</button>
                  </Dialog.Close>
                </ObservationOrderPendingAction>
              </ObservationOrderPendingContainer>
            </Dialog.Content>
          </ObservationOrderPendingOverlay>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
