import { CategoryContainer, CategoryImage, CategoryItem } from './groups.styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { ArrowRight } from 'lucide-react'
import { UseAppContext } from '../../../../context/use.app.context'
import { useEffect, useState } from 'react'
import { Group as GroupsType } from '../../../../context/styled'
import { NoData } from '../../../../components/noData'
import img from '../../../../assets/sanduwich.png'

const ApiGroups: GroupsType[] = [
  {
    groupId: 1,
    groupName: 'Burguer',
    groupImage: img,
    groupSearchDescription: 'Search our delicious burgers',
  },
  {
    groupId: 2,
    groupName: 'Sandwich',
    groupImage: 'https://picsum.photos/200/300?random=2',
    groupSearchDescription: 'Search our delicious Sandwich',
  },
  {
    groupId: 3,
    groupName: 'Tacos',
    groupImage: 'https://picsum.photos/200/300?random=3',
    groupSearchDescription: 'Search our delicious Tacos',
  },
  {
    groupId: 4,
    groupName: 'Batatinha frita',
    groupImage: 'https://picsum.photos/200/300?random=1',
    groupSearchDescription: 'Search our delicious French fries',
  },
  {
    groupId: 5,
    groupName: 'Pizzas',
    groupImage: 'https://picsum.photos/200/300?random=2',
    groupSearchDescription: 'Search our delicious Pizzas',
  },
  {
    groupId: 6,
    groupName: 'Hot dog',
    groupImage: 'https://picsum.photos/200/300?random=3',
    groupSearchDescription: 'Search our delicious Hot Dog',
  },
  {
    groupId: 7,
    groupName: 'Hot dog',
    groupImage: 'https://picsum.photos/200/300?random=3',
    groupSearchDescription: 'Search our delicious Hot Dog',
  },

  {
    groupId: 8,
    groupName: 'Hot dog',
    groupImage: 'https://picsum.photos/200/300?random=3',
    groupSearchDescription: 'Search our delicious Hot Dog',
  },
]

interface handleActiveGroup {
  id: number
}

export function Groups() {
  const { groups, handleGroup, handleSeachbarDescription } = UseAppContext()
  const [activeGroup, setActiveGroup] = useState<number>()

  useEffect(() => {
    handleGroup(ApiGroups)
  }, [handleGroup])

  function handleActiveGroup({ id }: handleActiveGroup) {
    setActiveGroup(id)

    const groupActive = groups?.find((group) => {
      return group.groupId === id
    })

    handleSeachbarDescription(groupActive?.groupSearchDescription)
  }

  return (
    <CategoryContainer>
      <Swiper
        slidesPerView={3}
        spaceBetween={8}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
        }}
      >
        {groups?.map((group) => {
          return (
            <SwiperSlide
              key={group.groupId}
              onClick={() => handleActiveGroup({ id: group.groupId })}
            >
              <CategoryItem
                className={activeGroup === group.groupId ? 'active' : ''}
              >
                <CategoryImage>
                  <img src={group.groupImage} alt="" />
                </CategoryImage>
                <span>{group.groupName}</span>
                <ArrowRight size={25} />
              </CategoryItem>
            </SwiperSlide>
          )
        })}
      </Swiper>

      {!groups && <NoData>Sem informações a serem mostradas</NoData>}
    </CategoryContainer>
  )
}
