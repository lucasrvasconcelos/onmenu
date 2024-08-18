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
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Item } from './order-pending'
import { Company } from '../../../../context/styled'

interface ConfirmOrderProps {
  company: Company
  productData?: {
    itens: Item[]
    total: number
  }
}

const OrderSchema = z.object({
  name: z.string().min(3),
  address: z.string(),
  number: z.string(),
})

type OrderType = z.infer<typeof OrderSchema>

export interface NeighborhoodType {
  id: number
  description: string
  companyId: number
  tax: number
}

export function ConfirmOrder({ company, productData }: ConfirmOrderProps) {
  const { handleSubmit, register } = useForm<OrderType>({
    resolver: zodResolver(OrderSchema),
  })

  const [checked, setChecked] = useState(true)
  const [neighborhood, setNeighborhood] = useState<NeighborhoodType>()

  function createOrder({ name, address, number }: OrderType) {
    const newOrder = {
      name,
      address,
      number,
      neighborhood,
      delivery: checked,
      company,
      itens: productData?.itens,
      totalAmount: productData?.total,
      totalWithTax:
        (productData?.total ? productData?.total : 0) +
        (neighborhood?.tax ? neighborhood?.tax : 0),
    }

    console.log(newOrder)
  }

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
                          <label htmlFor="name">Seu nome</label>
                          <input
                            type="text"
                            id="name"
                            required={true}
                            {...register('name')}
                          />
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
                            id="adress"
                            required={checked}
                            {...register('address')}
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
                            {...register('number')}
                            id="number"
                            required={checked}
                          />
                        </ProfileInput>
                      </ProfileInputWrapper>
                      <NeighborhoodTax
                        checked={checked}
                        total={productData?.total || 0}
                        setNeighborhood={setNeighborhood}
                        neighborhood={neighborhood}
                      />
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
