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

export function Header() {
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
          <span>Granja portugal</span>
        </Location>
        <Profile />
      </HeaderWrapper>

      <SearchBar />
    </HeaderContainer>
  )
}
