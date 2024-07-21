import { ArrowLeft, Heart } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import {
  CartApp,
  DetailsItem,
  FormContainer,
  ItemDetailsContainer,
  MenuOptionsItem,
} from './page.styled'
import { getProduct } from '../../../../api/get-product'
import { useQuery } from '@tanstack/react-query'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SkeletonGroup } from '../../components/Popular/popular.styled'

export function Item() {
  const navigate = useNavigate()
  const { company, proid } = useParams<{ company?: string; proid: string }>()

  const { data: product, isFetching } = useQuery({
    queryKey: ['product'],
    queryFn: () =>
      getProduct({
        company,
        proid,
      }),
  })

  const schema = z.object({
    quantity: z.number().int().min(1),
  })

  type AddItemCartType = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddItemCartType>({
    resolver: zodResolver(schema),
  })

  function addItemCart({ quantity }: AddItemCartType) {
    console.log(quantity)
  }

  console.log(errors)

  return !isFetching ? (
    product?.data ? (
      <ItemDetailsContainer>
        <MenuOptionsItem>
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={35} />
          </button>
          <button>
            <Heart size={35} strokeWidth={2} />
          </button>
        </MenuOptionsItem>
        <DetailsItem>
          <h1>{product?.data?.description}</h1>
          {product?.data?.ProductIngredient && (
            <ul>
              {product?.data?.ProductIngredient.map((item) => {
                return <li key={item.id}>{item.description}</li>
              })}
            </ul>
          )}

          <div>
            {product?.data?.imageUrl ? (
              <img src={product?.data?.imageUrl} alt="" />
            ) : (
              'Sem imagem'
            )}
          </div>
        </DetailsItem>
        <FormContainer onSubmit={handleSubmit(addItemCart)}>
          <button>-</button>
          <input type="number" defaultValue={2} {...register('quantity')} />
          <button>+</button>
        </FormContainer>

        <CartApp>
          <div>
            <h4>Subtotal</h4>
            <span>R$ 22,85</span>
          </div>
          <button>Adicionar</button>
        </CartApp>
      </ItemDetailsContainer>
    ) : (
      <span>Empresa inválida</span>
    )
  ) : (
    <SkeletonGroup width="100%" height="100%"></SkeletonGroup>
  )
}
