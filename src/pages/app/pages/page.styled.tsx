import { ArrowLeft, Star } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  DetailsItem,
  ItemDetailsContainer,
  MenuOptionsItem,
} from './page.styled'
import img from '../../../assets/sanduwich.png'

const ApiproductDetail = {
  id: 1,
  name: 'Sanduwich',
  ingredients: [
    'Pão',
    'Queijo',
    'hamburguer',
    'Pão',
    'Queijo',
    'hamburguer',
    'Pão',
    'Queijo',
    'hamburguer',
    'Pão',
    'Queijo',
    'hamburguer',
  ],
  price: 480.9,
  img,
}

export function Item() {
  const navigate = useNavigate()
  const { proid } = useParams<{ proid: string }>()

  return (
    <ItemDetailsContainer>
      <MenuOptionsItem>
        <ArrowLeft onClick={() => navigate(-1)} size={35} />
        <Star size={35} strokeWidth={3} />
      </MenuOptionsItem>
      <DetailsItem>
        <h1>{ApiproductDetail.name}</h1>
        <ul>
          {ApiproductDetail.ingredients.map((item, index) => {
            return <li key={index + item}>{item}</li>
          })}
        </ul>
        <img src={ApiproductDetail.img} alt="" />
      </DetailsItem>
    </ItemDetailsContainer>
  )
}
