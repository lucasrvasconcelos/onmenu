import { api } from '../lib/axios'

interface GetProductsPopular {
  error?: {
    message: string
  }
  data?: {
    id: number
    description: string
    costValue: number
    saleValue: number
    popular: boolean
    groupId: number
    companyId: number
    imageUrl: string
  }[]
}

interface GetProductsPopularProps {
  company?: string
  groupId?: number
}

export async function getProductsPopulars({
  company,
  groupId,
}: GetProductsPopularProps) {
  // await api.post('/company')
  const { data } = await api.get<GetProductsPopular>(
    `/app/${company}/popular`,
    {
      params: {
        groupId,
      },
    },
  )

  return data
}
