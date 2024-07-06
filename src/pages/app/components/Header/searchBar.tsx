import { UseAppContext } from '../../../../context/use.app.context'
import { Input, SearchContainer } from './searchBar.styled'

export function SearchBar() {
  const { seachbarDescription } = UseAppContext()

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder={seachbarDescription || 'Pesquise aqui seu lanche 😋'}
      />
    </SearchContainer>
  )
}
