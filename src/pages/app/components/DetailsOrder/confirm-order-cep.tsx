import { Search } from 'lucide-react'
import { SearchZipCode } from './confirm-order.styled'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useQuery } from '@tanstack/react-query'

const CepSchema = z.object({
  cep: z
    .string()
    .length(8, 'CEP deve ter 8 caracteres')
    .regex(/^\d+$/, 'CEP deve conter apenas números'),
})

type CepFormValues = z.infer<typeof CepSchema>

const fetchZipcodeData = async (cep: string) => {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
  if (!response) {
    throw new Error('Network response was not ok')
  }
  return response.data
}

export function SearchCep() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CepFormValues>({
    resolver: zodResolver(CepSchema),
  })

  const [zipcode, setZipcode] = useState('')

  const { data, isFetching, refetch } = useQuery({
    queryKey: ['zipcode', zipcode],
    queryFn: () => fetchZipcodeData(zipcode),
    enabled: false,
  })

  const onSubmit = (data: CepFormValues) => {
    console.log('Submit')
    setZipcode(data.cep)
    refetch()
  }

  console.log(isFetching && data)

  return (
    <SearchZipCode>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="00000-000" {...register('cep')} />
        <button type="submit" disabled={isFetching}>
          <Search strokeWidth={3} size={15} />
        </button>
      </form>
    </SearchZipCode>
  )
}
