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
        onChange={(e) =>
          setZipcode((state) => {
            return e.target.value.length > 8 ? state : e.target.value
          })
        }
      />
      <button type="submit" disabled={zipcode.length < 8}>
        <Search strokeWidth={3} size={15} /> Buscar CEP
      </button>
    </SearchZipCode>
  )
}
