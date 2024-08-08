import { Search } from 'lucide-react'
import { SearchZipCode } from './confirm-order.styled'
import { useState } from 'react'

export function SearchCep() {
  const [zipcode, setZipcode] = useState('')

  return (
    <SearchZipCode>
      <input
        type="text"
        placeholder="cep"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
      />
      <button type="submit">
        <Search strokeWidth={3} size={15} />
      </button>
    </SearchZipCode>
  )
}
