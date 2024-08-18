import { AlignLeft } from 'lucide-react'
import { Button } from '../../../../components/button'
import {
  DescriptionCompany,
  HeaderContainer,
  HeaderWrapper,
  Location,
  MapPinIconApp,
} from './header.styled'
import { Profile } from './profile'
import { SearchBar } from './searchBar'
import { Skeleton } from '../Skeleton/skeleton.styled'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getCompany } from '../../../../api/get-company'

export function Header() {
  const { companytag } = useParams<{ companytag: string }>()
  const { data: company, isFetching } = useQuery({
    queryKey: ['profile-company', companytag],
    queryFn: () => getCompany({ company: companytag }),
    enabled: !!companytag,
  })

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Button>
          <AlignLeft color="black" size={30} />
        </Button>
        <Location>
          <MapPinIconApp size={15}>
            <circle cx="12" cy="10" r="6" />
          </MapPinIconApp>

          <span>
            {isFetching ? (
              <Skeleton height="20px" width="100px" />
            ) : company ? (
              company.data?.fantasyName
            ) : (
              'Empresa não localizada'
            )}
          </span>
        </Location>
        <Profile />
      </HeaderWrapper>

      {!company?.data?.primaryDescription &&
      !company?.data?.secondaryDescription ? null : (
        <DescriptionCompany>
          {company?.data?.primaryDescription && (
            <h1>{company?.data?.primaryDescription}</h1>
          )}
          {company?.data?.secondaryDescription && (
            <p>{company?.data?.secondaryDescription}</p>
          )}
        </DescriptionCompany>
      )}

      <SearchBar />
    </HeaderContainer>
  )
}
