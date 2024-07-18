import { AlignLeft } from 'lucide-react'
import { Button } from '../../../../components/button'
import {
  HeaderContainer,
  HeaderWrapper,
  Location,
  MapPinIconApp,
} from './header.styled'
import { Profile } from './profile'
import { SearchBar } from './searchBar'
import { useQuery } from '@tanstack/react-query'
import { getCompany } from '../../../../api/get-company'
import { useParams } from 'react-router-dom'

export function Header() {

  const params = useParams()

  const { data: company, isFetching } = useQuery({
    queryKey: ['profile-company'],
    queryFn: () => getCompany(params.company),
  })

  console.log(company)

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
          {/* <span>Granja portugal</span> */}
          {/* FAzendo teste Api */}
          {isFetching ? <span>Carregando...</span> : <span>{company?.data?.fantasyName}</span>}
        </Location>
        <Profile />
      </HeaderWrapper>

      <SearchBar />
    </HeaderContainer>
  )
}
