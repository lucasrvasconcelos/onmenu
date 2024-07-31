import * as Dialog from '@radix-ui/react-dialog'
import { ButtonAction } from './order-pending-container.styled'
import { Trash2 } from 'lucide-react'
import { DeleteOrderDialogOverlay } from './delete-order-pending.styled'
import { UseAppContext } from '../../../../context/use.app.context'

interface DeleteOrderPendingProps {
  cnpj: string
}

export function DeleteOrderPending({ cnpj }: DeleteOrderPendingProps) {
  const { deleteOrder } = UseAppContext()

  function handleDeleteOrderPending(cnpj: string) {
    deleteOrder(cnpj)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonAction status="red">
          <Trash2 size={24} />
        </ButtonAction>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <DeleteOrderDialogOverlay>
            <Dialog.Content>
              <span>conteudo</span>
              <button onClick={() => handleDeleteOrderPending(cnpj)}>
                Confirmar
              </button>
            </Dialog.Content>
          </DeleteOrderDialogOverlay>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
