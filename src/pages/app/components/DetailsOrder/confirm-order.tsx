import * as Dialog from '@radix-ui/react-dialog'
import { Check } from 'lucide-react'
import { ButtonAction } from './order-pending.styled'
import { useForm } from 'react-hook-form'
import {
  ConfirmOrderContainer,
  ConfirmOrderContent,
  ConfirmOrderDialogOverlay,
} from './confirm-order.styled'
import { SearchCep } from './confirm-order-cep'

export function ConfirmOrder() {
  const { handleSubmit } = useForm()

  function createOrder() {}

  return (
    <Dialog.Root open={true}>
      <Dialog.Trigger asChild>
        <ButtonAction status="green">
          <Check size={24} />
        </ButtonAction>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <ConfirmOrderDialogOverlay>
            <Dialog.Content asChild>
              <ConfirmOrderContent>
                <Dialog.Title>Preencha os dados para entrega</Dialog.Title>
                <Dialog.Description>Seus dados</Dialog.Description>
                <ConfirmOrderContainer>
                  <form onSubmit={handleSubmit(createOrder)}>
                    <SearchCep />
                  </form>
                </ConfirmOrderContainer>
              </ConfirmOrderContent>
            </Dialog.Content>
          </ConfirmOrderDialogOverlay>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
