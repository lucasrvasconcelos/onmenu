import { api } from '../lib/axios'

export interface GetProduct {
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
  // api.interceptors.response.use(async (config) => {
  //   await new Promise((resolve) => setTimeout(resolve, 10000))
  //   return config
  // })

  await new Promise((resolve) => setTimeout(resolve, 10000))

  const { data } = await api.get<GetProduct>(`/app/${company}/product`, {
    params: {
      proid,
    },
  })

  return data
}
