import {
  ImageBackground,
  NameItemGroup,
  PopularContainer,
  PopularItem,
  PopularItemGroup,
} from './popular.styled'
import { formatCurrency } from '../../../../utils/currency'
import { UseAppContext } from '../../../../context/use.app.context'
import { useQuery } from '@tanstack/react-query'
import { getProductsPopulars } from '../../../../api/get-products-popular'
import { Skeleton, SkeletonGroup } from '../Skeleton/skeleton.styled'
import { useParams } from 'react-router-dom'

export function Popular() {
  const { activeGroup } = UseAppContext()

  const { companytag } = useParams<{ companytag: string }>()

  const { data: productsPopular, isFetching } = useQuery({
    queryKey: ['productpopular', activeGroup],
    queryFn: () =>
      getProductsPopulars({
        company: companytag,
        groupId: activeGroup?.id,
      }),
  })

  return (
    <PopularContainer>
      <h3>{activeGroup ? activeGroup.description : 'Populares'}</h3>
      {!isFetching ? (
        <PopularItemGroup>
          {productsPopular?.data?.map((product) => {
            return (
              <PopularItem
                key={product.id}
                to={`/app/${companytag}/${product.id}`}
              >
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
          nowrap="wrap"
          gap="8px"
        >
          <Skeleton width="320px" height="220px" flex="1" margin="25px 0 0 0" />
          <Skeleton width="320px" height="220px" flex="1" margin="25px 0 0 0" />
          <Skeleton width="320px" height="220px" flex="1" margin="25px 0 0 0" />
        </SkeletonGroup>
      )}
    </PopularContainer>
  )
}
