import { UseAppContext } from '../../../../context/use.app.context'
import { Input, SearchContainer } from './searchBar.styled'

export function SearchBar() {
  const { activeGroup } = UseAppContext()
  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder={activeGroup?.description || 'Pesquise aqui seu lanche 😋'}
      />
    </SearchContainer>
  )
}
