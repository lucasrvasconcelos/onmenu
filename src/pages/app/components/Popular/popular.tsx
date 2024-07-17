import {
  GroupPopular,
  ImageBackground,
  NameItemGroup,
  PopularContainer,
  PopularItem,
  PopularItemGroup,
} from './popular.styled'
import { formatCurrency } from '../../../../utils/currency'
import { useState } from 'react'
import { UseAppContext } from '../../../../context/use.app.context'
import { Link } from 'react-router-dom'

const ApiPopular = [
  {
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
    group: 1,
  },
  {
    id: 2,
    name: 'Hot dog',
    ingredients: ['Pão', 'Salsicha', 'Queijo'],
    price: 24.87,
    img: 'https://static.vecteezy.com/system/resources/thumbnails/025/076/438/small/pizza-isolated-illustration-ai-generative-png.png',
    group: 2,
  },
  {
    id: 3,
    name: 'Hot dog',
    ingredients: ['Pão', 'Salsicha', 'Queijo'],
    price: 24.87,
    img: 'https://static.vecteezy.com/system/resources/thumbnails/025/076/438/small/pizza-isolated-illustration-ai-generative-png.png',
    group: 2,
  },
  {
    id: 4,
    name: 'Hot dog',
    ingredients: ['Pão', 'Salsicha', 'Queijo'],
    price: 24.87,
    img: 'https://static.vecteezy.com/system/resources/thumbnails/025/076/438/small/pizza-isolated-illustration-ai-generative-png.png',
    group: 4,
  },
  {
    id: 5,
    name: 'Hot dog',
    ingredients: ['Pão', 'Salsicha', 'Queijo'],
    price: 24.87,
    img: 'https://static.vecteezy.com/system/resources/thumbnails/025/076/438/small/pizza-isolated-illustration-ai-generative-png.png',
    group: 1,
  },
  {
    id: 7,
    name: 'Hot dog',
    ingredients: ['Pão', 'Salsicha', 'Queijo'],
    price: 24.87,
    img: 'https://static.vecteezy.com/system/resources/thumbnails/025/076/438/small/pizza-isolated-illustration-ai-generative-png.png',
    group: 5,
  },
  {
    id: 8,
    name: 'Hot dog',
    ingredients: ['Pão', 'Salsicha', 'Queijo'],
    price: 24.87,
    img: 'https://static.vecteezy.com/system/resources/thumbnails/025/076/438/small/pizza-isolated-illustration-ai-generative-png.png',
    group: 5,
  },
  {
    id: 9,
    name: 'Hot dog',
    ingredients: ['Pão', 'Salsicha', 'Queijo'],
    price: 24.87,
    img: 'https://static.vecteezy.com/system/resources/thumbnails/025/076/438/small/pizza-isolated-illustration-ai-generative-png.png',
    group: 5,
  },
  {
    id: 10,
    name: 'Hot dog',
    ingredients: ['Pão', 'Salsicha', 'Queijo'],
    price: 24.87,
    img: 'https://static.vecteezy.com/system/resources/thumbnails/025/076/438/small/pizza-isolated-illustration-ai-generative-png.png',
    group: 11,
  },
  {
    id: 12,
    name: 'Hot dog',
    ingredients: ['Pão', 'Salsicha', 'Queijo'],
    price: 24.87,
    img: 'https://static.vecteezy.com/system/resources/thumbnails/025/076/438/small/pizza-isolated-illustration-ai-generative-png.png',
    group: 5,
  },
  {
    id: 13,
    name: 'Hot dog',
    ingredients: ['Pão', 'Salsicha', 'Queijo'],
    price: 24.87,
    img: 'https://static.vecteezy.com/system/resources/thumbnails/025/076/438/small/pizza-isolated-illustration-ai-generative-png.png',
    group: 5,
  },
  {
    id: 14,
    name: 'Hot dog',
    ingredients: ['Pão', 'Salsicha', 'Queijo'],
    price: 24.87,
    img: 'https://static.vecteezy.com/system/resources/thumbnails/025/076/438/small/pizza-isolated-illustration-ai-generative-png.png',
    group: 5,
  },
  {
    id: 15,
    name: 'Hot dog',
    ingredients: ['Pão', 'Salsicha', 'Queijo'],
    price: 24.87,
    img: 'https://static.vecteezy.com/system/resources/thumbnails/025/076/438/small/pizza-isolated-illustration-ai-generative-png.png',
    group: 5,
  },
]

export function Popular() {
  const { activeGroup } = UseAppContext()
  const [products] = useState(ApiPopular)

  let productFiltered = products.filter(
    (item) => item.group === activeGroup?.groupId,
  )

  if (!activeGroup) {
    productFiltered = products
  }

  return (
    productFiltered && (
      <PopularContainer>
        <GroupPopular>
          <h3>Popular</h3>

          <Link to={`/popular`}>Ver todos</Link>
        </GroupPopular>
        <PopularItemGroup>
          {productFiltered.map((item) => {
            return (
              <PopularItem key={item.id} to={`${item.id}`}>
                <ImageBackground>
                  <img src={item.img} alt="" />
                </ImageBackground>
                <NameItemGroup>
                  <div>
                    <h4>{item.name}</h4>
                  </div>
                  <span>{formatCurrency(item.price)}</span>
                </NameItemGroup>
              </PopularItem>
            )
          })}
        </PopularItemGroup>
      </PopularContainer>
    )
  )
}
