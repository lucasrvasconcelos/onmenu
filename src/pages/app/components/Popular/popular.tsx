import {
  ImageBackground,
  NameItemGroup,
  PopularContainer,
  PopularItem,
  PopularItemGroup,
} from './popular.styled'
import { formatCurrency } from '../../../../utils/currency'
import { UseAppContext } from '../../../../context/use.app.context'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getProductsPopulars } from '../../../../api/get-products-popular'
import { Skeleton, SkeletonGroup } from '../Skeleton/skeleton.styled'

export function Popular() {
  const params = useParams()
  const { activeGroup } = UseAppContext()

  const { data: productsPopular, isFetching } = useQuery({
    queryKey: ['productpopular', activeGroup],
    queryFn: () =>
      getProductsPopulars({
        company: params.company,
        groupId: activeGroup?.id,
      }),
  })

  return activeGroup ? (
    <PopularContainer>
      <h3>{activeGroup.description}</h3>
      {!isFetching ? (
        <PopularItemGroup>
          {productsPopular?.data?.map((product) => {
            return (
              <PopularItem key={product.id} to={`${product.id}`}>
                <ImageBackground>
                  <img src={product.imageUrl} alt="" />
                </ImageBackground>
                <NameItemGroup>
                  <div>
                    <h4>{product.description}</h4>
                  </div>
                  <span>{product.saleValue}</span>
                  <span>{formatCurrency(product.saleValue)}</span>
                </NameItemGroup>
              </PopularItem>
            )
          })}
        </PopularItemGroup>
      ) : (
        <SkeletonGroup
          display="flex"
          flexDirection="row"
          justify="center"
          align="center"
          gap="8px"
        >
          <Skeleton width="320px" height="220px" flex="1" margin="25px 0 0 0" />
          <Skeleton width="320px" height="220px" flex="1" margin="25px 0 0 0" />
          <Skeleton width="320px" height="220px" flex="1" margin="25px 0 0 0" />
        </SkeletonGroup>
      )}
    </PopularContainer>
  ) : (
    <PopularContainer>
      <h3>Populares</h3>
      {!isFetching ? (
        <PopularItemGroup>
          {productsPopular?.data?.map((product) => {
            return (
              <PopularItem key={product.id} to={`${product.id}`}>
                <ImageBackground>
                  <img src={product.imageUrl} alt="" />
                </ImageBackground>
                <NameItemGroup>
                  <div>
                    <h4>{product.description}</h4>
                  </div>
                  <span>{formatCurrency(product.saleValue)}</span>
                </NameItemGroup>
              </PopularItem>
            )
          })}
        </PopularItemGroup>
      ) : (
        <SkeletonGroup
          display="flex"
          flexDirection="row"
          justify="center"
          align="center"
          gap="8px"
        >
          <Skeleton width="320px" height="220px" />
          <Skeleton width="320px" height="220px" />
          <Skeleton width="320px" height="220px" />
        </SkeletonGroup>
      )}

      <SkeletonGroup
        display="flex"
        flexDirection="row"
        justify="center"
        align="center"
        gap="8px"
      >
        <Skeleton width="320px" height="220px" />
        <Skeleton width="320px" height="220px" />
        <Skeleton width="320px" height="220px" />
      </SkeletonGroup>
    </PopularContainer>
  )
}
