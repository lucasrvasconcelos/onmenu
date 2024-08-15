import * as Dialog from '@radix-ui/react-dialog'
import * as Switch from '@radix-ui/react-switch'

import { Check } from 'lucide-react'
import { ButtonAction } from './order-pending.styled'
import { useForm } from 'react-hook-form'
import {
  ChangeImageButton,
  ConfirmOrderAction,
  ConfirmOrderContent,
  ConfirmOrderDescription,
  ConfirmOrderDialogOverlay,
  ConfirmOrderForm,
  DeleteImageButton,
  InputNumber,
  ProfileChangeImage,
  ProfileContainer,
  ProfileImage,
  ProfileImageContainer,
  ProfileInput,
  ProfileInputWrapper,
  ProfileWrapper,
} from './confirm-order.styled'
import { useState } from 'react'
import { NeighborhoodTax } from './neighborhood-tax'

interface ConfirmOrderProps {
  total: number
}
export function ConfirmOrder({ total }: ConfirmOrderProps) {
  const { handleSubmit } = useForm()
  const [checked, setChecked] = useState(true)

  function createOrder() {}

  return (
    <Dialog.Root>
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
                <Dialog.Title asChild>
                  <h4>Preencha os dados para entrega</h4>
                </Dialog.Title>
                <Dialog.Description asChild>
                  <ConfirmOrderDescription>Seus dados</ConfirmOrderDescription>
                </Dialog.Description>
                <ConfirmOrderForm onSubmit={handleSubmit(createOrder)}>
                  <ProfileContainer>
                    <ProfileImageContainer>
                      <ProfileImage>
                        <span>Foto perfil</span>
                        <img
                          src="https://img.freepik.com/vetores-premium/icone-de-perfil-de-pessoas_24877-40756.jpg"
                          alt=""
                        />
                      </ProfileImage>
                      <ProfileChangeImage>
                        <ChangeImageButton>Mudar foto</ChangeImageButton>
                        <DeleteImageButton>Deletar foto</DeleteImageButton>
                      </ProfileChangeImage>
                    </ProfileImageContainer>

                    <ProfileWrapper>
                      <ProfileInputWrapper>
                        <ProfileInput>
                          <label htmlFor="nameuser">Seu nome</label>
                          <input type="text" id="nameuser" required={true} />
                        </ProfileInput>

                        <ProfileInput>
                          <label className="Label" htmlFor="delivery">
                            {checked ? 'Entrega' : 'Retirada'}
                          </label>
                          <Switch.Root
                            className="SwitchRoot"
                            id="delivery"
                            checked={checked}
                            onCheckedChange={setChecked}
                          >
                            <Switch.Thumb className="SwitchThumb" />
                          </Switch.Root>
                        </ProfileInput>
                      </ProfileInputWrapper>

                      <ProfileInputWrapper>
                        <ProfileInput>
                          <label
                            htmlFor="adress"
                            className={checked ? 'required' : ''}
                          >
                            Seu endereço
                          </label>
                          <input
                            type="text"
                            name="adress"
                            id="adress"
                            required={checked}
                          />
                        </ProfileInput>
                        <ProfileInput>
                          <label
                            htmlFor="number"
                            className={checked ? 'required' : ''}
                          >
                            Número
                          </label>
                          <InputNumber
                            type="text"
                            name="number"
                            id="number"
                            required={checked}
                          />
                        </ProfileInput>
                      </ProfileInputWrapper>
                      <NeighborhoodTax checked={checked} total={total} />
                      <ConfirmOrderAction>
                        <Dialog.Close asChild>
                          <button type="button">Cancelar</button>
                        </Dialog.Close>
                        <button type="submit">Confirmar</button>
                      </ConfirmOrderAction>
                    </ProfileWrapper>
                  </ProfileContainer>
                </ConfirmOrderForm>
              </ConfirmOrderContent>
            </Dialog.Content>
          </ConfirmOrderDialogOverlay>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
