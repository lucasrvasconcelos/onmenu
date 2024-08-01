import * as Dialog from '@radix-ui/react-dialog'
import { ButtonAction } from './order-pending-container.styled'
import { Trash2 } from 'lucide-react'
import {
  BtnCancelDeleteOrder,
  BtnDeleteOrder,
  DeleteOrderAction,
  DeleteOrderDialogOverlay,
  DialogContentContainer,
} from './delete-order-pending.styled'
import { UseAppContext } from '../../../../context/use.app.context'
import { toast } from 'sonner'

interface DeleteOrderPendingProps {
  company?: {
    id: number
    cnpj: string
    socialReason: string
    fantasyName: string
    tag: string | null
  }
}

export function DeleteOrderPending({ company }: DeleteOrderPendingProps) {
  const { deleteOrder } = UseAppContext()

  function handleDeleteOrderPending(cnpj?: string) {
    if (!cnpj) {
      return
    }

    toast.error(`Pedido da empresa ${company?.fantasyName} foi excluido`)
    deleteOrder(cnpj)
  }

  return (
    company && (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonAction status="red">
            <Trash2 size={24} />
          </ButtonAction>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay asChild>
            <DeleteOrderDialogOverlay>
              <Dialog.Content asChild>
                <DialogContentContainer>
                  <Dialog.Description>
                    Confirma exclusão do pedido?
                  </Dialog.Description>

                  <DeleteOrderAction>
                    <Dialog.Close asChild>
                      <BtnCancelDeleteOrder
                        onClick={() => handleDeleteOrderPending()}
                      >
                        Não
                      </BtnCancelDeleteOrder>
                    </Dialog.Close>
                    <BtnDeleteOrder
                      onClick={() => handleDeleteOrderPending(company.cnpj)}
                    >
                      Sim
                    </BtnDeleteOrder>
                  </DeleteOrderAction>
                </DialogContentContainer>
              </Dialog.Content>
            </DeleteOrderDialogOverlay>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    )
  )
}
