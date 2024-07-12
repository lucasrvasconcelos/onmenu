import {
  GroupPopular,
  ImageBackground,
  Ingredients,
  IngredientsName,
  NameItemGroup,
  PopularContainer,
  PopularItem,
  PopularItemGroup,
} from './popular.styled'
import { LinkApp } from '../../../../components/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { formatCurrency } from '../../../../utils/currency'
import { Autoplay } from 'swiper/modules'
import { useState } from 'react'
import { UseAppContext } from '../../../../context/use.app.context'

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

  const [product] = useState(ApiPopular)
  let productFiltered = []

  if (!activeGroup) {
    productFiltered = product
  } else {
    productFiltered = product.filter((item) => item.group === activeGroup)
  }

  return (
    ApiPopular && (
      <PopularContainer>
        <GroupPopular>
          <h3>Popular</h3>

          <LinkApp to={`/popular`}>Ver todos</LinkApp>
        </GroupPopular>
        <PopularItemGroup>
          {productFiltered.map((item) => {
            return (
              <PopularItem key={item.id} to={`item/?proid=${item.id}`}>
                <ImageBackground>
                  <img src={item.img} alt="" />
                </ImageBackground>
                <NameItemGroup>
                  <div>
                    <h4>{item.name}</h4>

                    <Ingredients>
                      <Swiper
                        spaceBetween={2}
                        slidesPerView={3}
                        autoplay={{
                          delay: 2500,
                        }}
                        loop={false}
                        modules={[Autoplay]}
                      >
                        {item.ingredients.length >= 3 &&
                          item.ingredients.map((item, index) => {
                            return (
                              <SwiperSlide key={item + index}>
                                <IngredientsName>{item}</IngredientsName>
                              </SwiperSlide>
                            )
                          })}
                      </Swiper>
                    </Ingredients>
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
