import * as Dialog from '@radix-ui/react-dialog'
import { Check } from 'lucide-react'
import { ButtonAction } from './order-pending.styled'
import { useForm } from 'react-hook-form'
import {
  ConfirmOrderContainer,
  ConfirmOrderContent,
  ConfirmOrderDialogOverlay,
  InputItem,
  InputItemContainer,
  InputsContainer,
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
                <ConfirmOrderContainer onSubmit={handleSubmit(createOrder)}>
                  <SearchCep />
                  <InputsContainer>
                    <InputItemContainer>
                      <InputItem>
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="name" />
                      </InputItem>
                      <InputItem>
                        <label htmlFor="telephone">Telefone</label>
                        <input type="text" name="telephone" id="telephone" />
                      </InputItem>
                    </InputItemContainer>

                    <InputItemContainer>
                      <InputItem>
                        <label htmlFor="road">Rua</label>
                        <input type="text" name="road" id="road" />
                      </InputItem>
                      <InputItem>
                        <label htmlFor="number">Numero</label>
                        <input type="text" name="number" id="number" />
                      </InputItem>
                    </InputItemContainer>

                    <InputItemContainer>
                      <InputItem>
                        <label htmlFor="neighborhood">Bairro</label>
                        <input
                          type="text"
                          name="neighborhood"
                          id="neighborhood"
                        />
                      </InputItem>
                      <InputItem>
                        <label htmlFor="city">Cidade</label>
                        <input type="text" name="city" id="city" />
                      </InputItem>
                    </InputItemContainer>
                  </InputsContainer>
                </ConfirmOrderContainer>
              </ConfirmOrderContent>
            </Dialog.Content>
          </ConfirmOrderDialogOverlay>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
