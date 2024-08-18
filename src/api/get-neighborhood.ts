import { api } from '../lib/axios'

interface GetNeighborhood {
  error?: {
    message: string
  }
  data?: {
    id: number
    description: string
    companyId: number
    tax: number
  }[]
}

interface GetNeighborhoodProps {
  company?: string
}

export async function getNeighborhood({ company }: GetNeighborhoodProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const { data } = await api.get<GetNeighborhood>(
    `/app/${company}/neighborhood`,
  )

  return data
}
