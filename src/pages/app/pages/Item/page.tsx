import { ArrowLeft, Heart } from 'lucide-react'
import {
  useNavigate,
  // useParams
} from 'react-router-dom'

import {
  DetailsItem,
  ItemDetailsContainer,
  MenuOptionsItem,
} from './page.styled'

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
  img: 'https://static.vecteezy.com/system/resources/thumbnails/025/076/438/small/pizza-isolated-illustration-ai-generative-png.png',
}

export function Item() {
  const navigate = useNavigate()
  // const { proid } = useParams<{ proid: string }>()

  return (
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
        <h1>{ApiproductDetail.name}</h1>
        <ul>
          {ApiproductDetail.ingredients.map((item, index) => {
            return <li key={index + item}>{item}</li>
          })}
        </ul>
        <div>
          <img src={ApiproductDetail.img} alt="" />
        </div>
      </DetailsItem>
    </ItemDetailsContainer>
  )
}
