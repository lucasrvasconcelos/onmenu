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

import img from '../../../../assets/sanduwich.png'
import { formatCurrency } from '../../../../utils/currency'
import { Autoplay } from 'swiper/modules'
import { redirect, useLocation, useNavigate } from 'react-router-dom'

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
    img,
  },
  {
    id: 2,
    name: 'Hot dog',
    ingredients: ['Pão', 'Salsicha', 'Queijo'],
    price: 24.87,
    img,
  },
  {
    id: 3,
    name: 'Hot dog',
    ingredients: ['Pão', 'Salsicha', 'Queijo'],
    price: 24.87,
    img,
  },
  {
    id: 4,
    name: 'Hot dog',
    ingredients: ['Pão', 'Salsicha', 'Queijo'],
    price: 24.87,
    img,
  },
  {
    id: 5,
    name: 'Hot dog',
    ingredients: ['Pão', 'Salsicha', 'Queijo'],
    price: 24.87,
    img,
  },
  {
    id: 6,
    name: 'Hot dog',
    ingredients: ['Pão', 'Salsicha', 'Queijo'],
    price: 24.87,
    img,
  },
]

interface addItemProps {
  id: number
}

export function Popular() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  function addItem({ id }: addItemProps) {
    navigate(pathname + `/item/${id}`)
  }

  return (
    ApiPopular && (
      <PopularContainer>
        <GroupPopular>
          <h3>Popular</h3>
          <LinkApp to={`/popular`}>Ver todos</LinkApp>
        </GroupPopular>
        <PopularItemGroup>
          {ApiPopular.map((item) => {
            return (
              <PopularItem
                key={item.id}
                onClick={() => addItem({ id: item.id })}
              >
                <ImageBackground>
                  <img src={item.img} alt="" />
                </ImageBackground>
                <NameItemGroup>
                  <div>
                    <h4>{item.name}</h4>
                    <Ingredients>
                      <Swiper
                        spaceBetween={5}
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
