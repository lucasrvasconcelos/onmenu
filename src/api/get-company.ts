import { api } from '../lib/axios'

interface GetCompany {
  error?: string
  data?: {
    id: number;
    cnpj: string;
    socialReason: string;
    fantasyName: string;
    tag: string | null;
  }
}

export async function getCompany(company?: string) {
  // await api.post('/company')
  const { data } = await api.get<GetCompany>(`/app/${company}`)

  return data
}
