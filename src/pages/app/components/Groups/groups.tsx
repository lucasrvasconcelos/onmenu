import { useParams, useSearchParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  CategoryContainer,
  CategoryImage,
  CategoryItem,
  CleanFilters,
} from './groups.styled'
import { ArrowRight, X } from 'lucide-react'
import { NoData } from '../../../../components/noData'
import { getGroups } from '../../../../api/get-groups'
import { useQuery } from '@tanstack/react-query'
import { UseAppContext } from '../../../../context/use.app.context'
import { useEffect } from 'react'
import { Skeleton, SkeletonGroup } from '../Skeleton/skeleton.styled'

interface HandleGroupSelectionProps {
  id: number
  description: string
  companyId: number
  groupSearchDescription: string
}

export function Groups() {
  const { activeGroup, handleActiveGroup } = UseAppContext()
  const params = useParams()

  const [searchParams, setSearchParams] = useSearchParams()
  const groupParam = searchParams.get('group')

  const { data: groups, isFetching } = useQuery({
    queryKey: ['groups'],
    queryFn: () => getGroups({ company: params.company, group: groupParam }),
  })

  const activeGroupFiltered = groupParam
    ? groups?.data?.find((g) => g.description === groupParam)
    : undefined

  useEffect(() => {
    if (activeGroupFiltered) handleActiveGroup(activeGroupFiltered)
  }, [activeGroupFiltered, handleActiveGroup])

  function handleGroupSelection(group?: HandleGroupSelectionProps) {
    if (!group) {
      searchParams.delete('group')
      setSearchParams(searchParams)
      handleActiveGroup()
      return
    }

    searchParams.set('group', group.description)
    setSearchParams(searchParams)
    handleActiveGroup(group)
  }

  const groupLength =
    groups?.data && groups?.data?.length < 3 ? groups.data?.length : 3

  const breakpointsScreen =
    groups?.data && groups?.data?.length < 4 ? groups.data?.length : 4

  return (
    <CategoryContainer>
      {activeGroup && (
        <CleanFilters onClick={() => handleGroupSelection()}>
          Limpar filtros <X size={14} />
        </CleanFilters>
      )}

      {!isFetching ? (
        !groups?.data ? (
          <NoData>Sem informações a serem mostradas</NoData>
        ) : (
          <Swiper
            slidesPerView={groupLength}
            spaceBetween={24}
            breakpoints={{
              640: {
                slidesPerView: breakpointsScreen,
                spaceBetween: 18,
              },
            }}
          >
            {groups?.data?.map((group) => (
              <SwiperSlide
                key={group.id}
                onClick={() => handleGroupSelection(group)}
              >
                <CategoryItem
                  className={activeGroup?.id === group.id ? 'active' : ''}
                >
                  <CategoryImage>
                    <img src={group.imageUrl} alt="" /> /
                  </CategoryImage>
                  <span>{group.description}</span>
                  <ArrowRight size={25} />
                </CategoryItem>
              </SwiperSlide>
            ))}
          </Swiper>
        )
      ) : (
        <SkeletonGroup
          display="flex"
          flexDirection="row"
          gap="18px"
          nowrap="nowrap"
        >
          <Skeleton width="180px" height="200px" />
          <Skeleton width="180px" height="200px" />
          <Skeleton width="180px" height="200px" />
          <Skeleton width="180px" height="200px" />
          <Skeleton width="180px" height="200px" />
          <Skeleton width="180px" height="200px" />
          <Skeleton width="180px" height="200px" />
        </SkeletonGroup>
      )}
    </CategoryContainer>
  )
}
