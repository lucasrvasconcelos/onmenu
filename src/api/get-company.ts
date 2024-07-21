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
    tag: string | null
  }
}

interface GetCompanyProps {
  company?: string
}

export async function getCompany({ company }: GetCompanyProps) {
  const { data } = await api.get<GetCompany>(`/app/${company}`)

  return data
}
