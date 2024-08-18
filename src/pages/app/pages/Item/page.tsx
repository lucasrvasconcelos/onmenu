import { ArrowLeft, Minus, Plus, ShoppingCart } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import {
  AddItemButton,
  CartApp,
  DetailsItem,
  FormContainer,
  ImageItem,
  ItemDetailsContainer,
  ItemOrderLength,
  ItensControl,
  MenuOptionsItem,
  SetQuantity,
} from './page.styled'
import { getProduct } from '../../../../api/get-product'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { ItensForCompany } from '../../../../context/app.context'
import { formatCurrency } from '../../../../utils/currency'
import { ObservationDialog } from '../../components/Dialog/dialog'
import {
  Skeleton,
  SkeletonGroup,
} from '../../components/Skeleton/skeleton.styled'
import { UseAppContext } from '../../../../context/use.app.context'
import { toast } from 'sonner'
import { getCompany } from '../../../../api/get-company'

export function Item() {
  const { proid } = useParams<{ proid: string }>()
  const [quantityInput, setQuantityInput] = useState(1)
  const [observationDescription, setObservationDescription] = useState('')
  const { addItemOrder, itensOrder } = UseAppContext()

  const { companytag } = useParams<{ companytag: string }>()

  const { data: company } = useQuery({
    queryKey: ['profile-company', companytag],
    queryFn: () => getCompany({ company: companytag }),
    enabled: !!companytag,
  })

  const { data: product, isFetching } = useQuery({
    queryKey: ['product', companytag],
    queryFn: () =>
      getProduct({
        company: companytag,
        proid,
      }),
  })

  const { handleSubmit } = useForm()

  function handleDecreaseQuantity(quantity: number) {
    setQuantityInput((state) => {
      if (state + quantity === 0) {
        return state
      }
      return state + quantity
    })
  }

  function addItemCart() {
    if (product?.data?.id && company?.data) {
      const newItem: ItensForCompany = {
        company: company.data,
        date: String(new Date()),
        itens: [
          {
            aplicationId: uuidv4(),
            id: product?.data?.id,
            description: product?.data?.description,
            quantity: quantityInput,
            observation: observationDescription,
          },
        ],
      }
      toast.success(
        `Adicionado: ${quantityInput} x ${product.data.description}`,
      )
      try {
        addItemOrder(newItem)
        setQuantityInput(1)
        setObservationDescription('')
      } catch (error) {
        toast.error(`Erro ao adicionar produto`)
      }
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

  const lengthOrderCompany = itensOrder.find(
    (item) => item.company.cnpj === company?.data?.cnpj,
  )

  return (
    <ItemDetailsContainer>
      <MenuOptionsItem>
        <Link to={`/app/${companytag}/home`}>
          <ArrowLeft size={35} />
        </Link>
        {lengthOrderCompany && (
          <Link to={`/app/${companytag}/orders`}>
            <ShoppingCart size={35} />
            <ItemOrderLength>{lengthOrderCompany.itens.length}</ItemOrderLength>
          </Link>
        )}
      </MenuOptionsItem>
      <DetailsItem>
        {isFetching ? (
          <Skeleton width="320px" height="80px" />
        ) : (
          <h1>
            {product?.data?.description
              ? product?.data?.description
              : 'Produto sem descrição'}
          </h1>
        )}

        {isFetching ? (
          <SkeletonGroup display="flex" gap="4px">
            <Skeleton height="20px" width="60px" />
            <Skeleton height="20px" width="60px" />
            <Skeleton height="20px" width="60px" />
            <Skeleton height="20px" width="60px" />
          </SkeletonGroup>
        ) : (
          product?.data?.ProductIngredient && (
            <ul>
              {product?.data?.ProductIngredient.map((item) => {
                return (
                  <li key={item.id} title={item.description}>
                    {item.description}
                  </li>
                )
              })}
            </ul>
          )
        )}

        {isFetching ? (
          <Skeleton width="320px" height="200px" margin="15px 0 0 0 " />
        ) : product?.data?.imageUrl ? (
          <ImageItem>
            <img src={product?.data?.imageUrl} alt="" />
          </ImageItem>
        ) : (
          <p>Produto sem imagem</p>
        )}
      </DetailsItem>
      <form onSubmit={handleSubmit(addItemCart)}>
        <FormContainer>
          {isFetching ? (
            <Skeleton width="320px" height="60px" />
          ) : product?.data ? (
            <ItensControl>
              <SetQuantity>
                <button
                  onClick={() => handleDecreaseQuantity(-1)}
                  type="button"
                >
                  <Minus strokeWidth={3} />
                </button>
                <span>{quantityInput}</span>
                <button onClick={() => handleDecreaseQuantity(1)} type="button">
                  <Plus strokeWidth={3} />
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
            <Skeleton width="320px" height="200px" margin="15px 0px 0px 0px" />
          )}

          <CartApp>
            <div>
              <h4>Subtotal</h4>
              <span>
                {isFetching ? (
                  <Skeleton width="113px" height="40px" margin="8px 0 0 0" />
                ) : (
                  formatCurrency(
                    quantityInput * (product?.data?.saleValue || 0),
                  )
                )}
              </span>
            </div>
            {isFetching ? (
              <Skeleton width="155px" height="42px" />
            ) : (
              <AddItemButton type="submit">Adicionar</AddItemButton>
            )}
          </CartApp>
        </FormContainer>
      </form>
    </ItemDetailsContainer>
  )
}
