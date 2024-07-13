// import { Groups } from './components/Groups/groups'
import { Groups } from './components/Groups/groups'
import { Popular } from './components/Popular/popular'
import { AppContainer } from './page.styled'

export function AppDelivery() {
  return (
    <AppContainer>
      <Groups />
      <Popular />
    </AppContainer>
  )
}
