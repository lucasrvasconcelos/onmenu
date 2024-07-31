import { ItensOrder } from '../context/app.context'
import { api } from '../lib/axios'

export interface GetCurrentPrices {
  error?: {
    message: string
  }
  data: {
    company: {
      id: number
      cnpj: string
      socialReason: string
      fantasyName: string
      tag: string | null
    }
    prices: {
      id: number
      description: string
      saleValue: number
      companyId: number
    }[]
  }
}

interface GetCurrentPricesProps {
  company?: string
  itens: ItensOrder[]
}

export async function getCurrentPrices({
  company,
  itens,
}: GetCurrentPricesProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const { data } = await api.post<GetCurrentPrices>(`/app/get-current-prices`, {
    company,
    itens,
  })

  return data
}
