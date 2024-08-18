import { api } from '../lib/axios'

export interface GetCompany {
  error?: {
    message: string
  }
  data?: {
    id: number
    cnpj: string
    socialReason: string
    fantasyName: string
    tag: string
    city: string | null
    number: string | null
    street: string | null
    complement: string | null
    district: string | null
    cep: string | null
    phone: string | null
    email: string | null
    primaryDescription: string | null
    secondaryDescription: string | null
  }
}

interface GetCompanyProps {
  company?: string
}

export async function getCompany({ company }: GetCompanyProps) {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const { data } = await api.get<GetCompany>(`/app/${company}`)

  return data
}
