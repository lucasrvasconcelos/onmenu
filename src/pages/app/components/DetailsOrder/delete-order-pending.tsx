import * as Popover from '@radix-ui/react-popover'
import { ButtonAction } from './order-pending.styled'
import { Trash2 } from 'lucide-react'
import {
  DeleteOrderAction,
  PopoverContent,
} from './delete-order-pending.styled'
import { UseAppContext } from '../../../../context/use.app.context'
import { toast } from 'sonner'
import { ButtonOrderAction } from './button-order'
import { Company } from '../../../../context/styled'

interface DeleteOrderPendingProps {
  company: Company
}

export function DeleteOrderPending({ company }: DeleteOrderPendingProps) {
  const { deleteOrder } = UseAppContext()

  function handleDeleteOrderPending(company?: Company) {
    if (!company) {
      return
    }

    toast.error(`Pedido excluido com sucesso`)
    deleteOrder(company)
  }

  return (
    company.cnpj && (
      <Popover.Root>
        <Popover.Trigger asChild>
          <ButtonAction status="red">
            <Trash2 size={24} />
          </ButtonAction>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            sideOffset={8}
            collisionPadding={{
              right: 20,
              left: 20,
            }}
          >
            <PopoverContent>
              <span>Confirma exclusão?</span>
              <DeleteOrderAction>
                <ButtonOrderAction
                  color="white"
                  onClick={() => handleDeleteOrderPending(company)}
                >
                  Sim
                </ButtonOrderAction>

                <Popover.Close asChild>
                  <ButtonOrderAction
                    color="red"
                    onClick={() => handleDeleteOrderPending()}
                  >
                    Não
                  </ButtonOrderAction>
                </Popover.Close>
              </DeleteOrderAction>

              <Popover.Arrow className="popoverArrow" />
            </PopoverContent>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    )
  )
}
