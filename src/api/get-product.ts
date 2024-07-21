import { api } from '../lib/axios'

interface GetProduct {
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
    ProductIngredient: {
      id: number
      productId: number
      companyId: number
      description: string
    }[]
  }
}

interface GetProductProps {
  company?: string
  proid?: string | null
}

export async function getProduct({ company, proid }: GetProductProps) {
  const { data } = await api.get<GetProduct>(`/app/${company}/product`, {
    params: {
      proid,
    },
  })

  return data
}
