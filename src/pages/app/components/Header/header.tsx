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
import { GetCompany } from '../../../../api/get-company'
import { Skeleton } from '../Skeleton/skeleton.styled'

interface HeaderProps {
  company?: GetCompany
  isFetching: boolean
}
export function Header({ company, isFetching }: HeaderProps) {
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
            ) : company?.error ? (
              company?.error.message
            ) : (
              company?.data?.fantasyName
            )}
          </span>
        </Location>
        <Profile />
      </HeaderWrapper>

      <SearchBar />
    </HeaderContainer>
  )
}
