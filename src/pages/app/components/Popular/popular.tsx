import {
  ImageBackground,
  NameItemGroup,
  PopularContainer,
  PopularItem,
  PopularItemGroup,
  Skeleton,
  SkeletonGroup,
} from './popular.styled'
import { formatCurrency } from '../../../../utils/currency'
import { UseAppContext } from '../../../../context/use.app.context'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getProductsPopulars } from '../../../../api/get-products-popular'

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
        <Skeleton>
          <SkeletonGroup height="220px" />
          <SkeletonGroup height="220px" />
          <SkeletonGroup height="220px" />
        </Skeleton>
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
        <Skeleton>
          <SkeletonGroup height="220px" />
          <SkeletonGroup height="220px" />
          <SkeletonGroup height="220px" />
        </Skeleton>
      )}
    </PopularContainer>
  )
}
