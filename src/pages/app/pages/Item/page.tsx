import { ArrowLeft, Heart, Minus, Plus } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import {
  CartApp,
  DetailsItem,
  FormContainer,
  ItemDetailsContainer,
  ItensControl,
  MenuOptionsItem,
  SetQuantity,
} from './page.styled'
import { getProduct } from '../../../../api/get-product'
import { useQuery } from '@tanstack/react-query'
import { SkeletonGroup } from '../../components/Popular/popular.styled'
import { useState } from 'react'
import { ItensOrder } from '../../../../context/app.context'
import { formatCurrency } from '../../../../utils/currency'
import { ObservationDialog } from '../../components/Dialog/dialog'

export function Item() {
  const { company, proid } = useParams<{ company?: string; proid: string }>()
  const [quantityInput, setQuantityInput] = useState(1)
  const [observationDescription, setObservationDescription] = useState('')

  const { data: product, isFetching } = useQuery({
    queryKey: ['product'],
    queryFn: () =>
      getProduct({
        company,
        proid,
      }),
  })

  // const schema = z.object({
  //   // quantity: z.number().min(1),
  // })

  // type AddItemCartType = z.infer<typeof schema>

  const {
    // register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm({
    // resolver: zodResolver(schema),
  })

  function handleDecreaseQuantity(quantity: number) {
    setQuantityInput((state) => {
      if (state + quantity === 0) {
        return state
      }
      return state + quantity
    })
  }

  function addItemCart() {
    console.log('Adicionado item')
    if (product?.data?.id) {
      const newItem: ItensOrder = {
        id: product?.data?.id,
        description: product?.data?.description,
        quantity: quantityInput,
        observation: observationDescription,
      }
      console.log(newItem)
      setQuantityInput(1)
      setObservationDescription('')
    }
  }

  function handleObservationDescription(observation: string, clear?: boolean) {
    setObservationDescription((state) => {
      if (clear) {
        return ''
      }

      if (observation.length <= 255) {
        return observation
      }

      return state
    })
  }

  return (
    <ItemDetailsContainer>
      <MenuOptionsItem>
        <Link to={`/app/${company}`}>
          <ArrowLeft size={35} />
        </Link>
        <button>
          <Heart size={35} strokeWidth={2} />
        </button>
      </MenuOptionsItem>
      <DetailsItem>
        {isFetching ? (
          <SkeletonGroup width="100px" height="24px" />
        ) : (
          <h1>
            {product?.data?.description
              ? product?.data?.description
              : 'Produto sem descrição'}
          </h1>
        )}

        {product?.data?.ProductIngredient && (
          <ul>
            {product?.data?.ProductIngredient.map((item) => {
              return (
                <li key={item.id} title={item.description}>
                  {item.description}
                </li>
              )
            })}
          </ul>
        )}

        {product?.data?.imageUrl ? (
          <div>
            <img src={product?.data?.imageUrl} alt="" />
          </div>
        ) : (
          <p>Produto sem imagem</p>
        )}
      </DetailsItem>
      <form onSubmit={handleSubmit(addItemCart)}>
        <FormContainer>
          {product?.data ? (
            <ItensControl>
              <SetQuantity>
                <button
                  onClick={() => handleDecreaseQuantity(-1)}
                  type="button"
                >
                  <Minus />
                </button>
                <span>{quantityInput}</span>
                <button onClick={() => handleDecreaseQuantity(1)} type="button">
                  <Plus />
                </button>
              </SetQuantity>
              <ObservationDialog
                product={product}
                quantity={quantityInput}
                observationDescription={observationDescription}
                handleObservationDescription={handleObservationDescription}
              />
            </ItensControl>
          ) : (
            <SkeletonGroup />
          )}

          <CartApp>
            <div>
              <h4>Subtotal</h4>
              <span>
                {formatCurrency(
                  quantityInput * (product?.data?.saleValue || 0),
                )}
              </span>
            </div>
            <button type="submit">ADD</button>
          </CartApp>
        </FormContainer>
      </form>
    </ItemDetailsContainer>
  )
}
