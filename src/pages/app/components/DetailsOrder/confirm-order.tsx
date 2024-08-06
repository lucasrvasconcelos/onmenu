import * as Dialog from '@radix-ui/react-dialog'
import { Check } from 'lucide-react'
import { ButtonAction } from './order-pending.styled'
import {
  ConfirmOrderContainer,
  ConfirmOrderContent,
  ConfirmOrderDialogOverlay,
} from './confirm-order.styled'

export function ConfirmOrder() {
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
                <Dialog.Description>
                  Ao concluir clique em confirmar
                </Dialog.Description>
                <ConfirmOrderContainer></ConfirmOrderContainer>
              </ConfirmOrderContent>
            </Dialog.Content>
          </ConfirmOrderDialogOverlay>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
