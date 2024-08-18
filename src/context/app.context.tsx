import { createContext, useState } from 'react'
import { Item } from '../pages/app/components/DetailsOrder/order-pending'
import { Company } from './styled'
import { useQuery } from '@tanstack/react-query'
import { getCompany } from '../api/get-company'

export interface ActiveGroup {
  id: number
  description: string
  companyId: number
  groupSearchDescription: string
}

export interface ItemOrderType {
  aplicationId: string
  id: number
  description: string
  quantity: number
  observation?: string
}

export interface ItensForCompany {
  company: Company
  date: string
  itens: ItemOrderType[]
}

export interface UpdateQuantityItemProps {
  company: Company
  product: Item
  quantity: number
}

export interface UpdateObservationItemProps {
  company: Company
  product: Item
  observation?: string
}

export interface DeleteItemOrder {
  company: Company
  product: Item
}

interface AppContextInterface {
  activeGroup?: ActiveGroup
  itensOrder: ItensForCompany[]
  company?: Company
  setCompanytag: (companytag?: string) => void
  handleActiveGroup: (group?: ActiveGroup) => void
  addItemOrder: (item: ItensForCompany) => void
  deleteOrder: (company: Company) => void
  updateQuantityItem: ({
    company,
    product,
    quantity,
  }: UpdateQuantityItemProps) => void
  updateObservationItem: ({
    company,
    product,
    observation,
  }: UpdateObservationItemProps) => void
  deleteItemOrder: ({ company, product }: DeleteItemOrder) => void
}

export const AppContext = createContext({} as AppContextInterface)

interface AppProviderProps {
  children: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  const [companytag, setCompanytag] = useState<string | undefined>()
  const { data: companyData } = useQuery({
    queryKey: ['profile-company', companytag],
    queryFn: () => getCompany({ company: companytag }),
    enabled: !!companytag,
  })

  const company = companyData?.data

  const [activeGroup, setActiveGroup] = useState<ActiveGroup | undefined>(
    undefined,
  )
  const [itensOrder, setItensOrder] = useState<ItensForCompany[]>(() => {
    const storedItensOrder = localStorage.getItem('itensOrder')
    return storedItensOrder ? JSON.parse(storedItensOrder) : []
  })

  function handleActiveGroup(group?: ActiveGroup) {
    setActiveGroup(group)
  }

  function deleteOrder(company: Company) {
    setItensOrder((state) => {
      const filteredItensOrder = state.filter(
        (item) => item.company.cnpj !== company.cnpj,
      )

      localStorage.setItem('itensOrder', JSON.stringify(filteredItensOrder))
      return filteredItensOrder
    })
  }

  function addItemOrder(newItemOrder: ItensForCompany) {
    setItensOrder((prevItensOrder) => {
      const companyIndex = prevItensOrder.findIndex(
        (item) => item.company.cnpj === newItemOrder.company.cnpj,
      )

      let updatedItensOrder

      if (companyIndex !== -1) {
        updatedItensOrder = prevItensOrder.map((item, index) => {
          if (index === companyIndex) {
            return {
              ...item,
              itens: [...item.itens, ...newItemOrder.itens],
            }
          }
          return item
        })
      } else {
        updatedItensOrder = [...prevItensOrder, newItemOrder]
      }

      localStorage.setItem('itensOrder', JSON.stringify(updatedItensOrder))
      return updatedItensOrder
    })
  }

  function updateQuantityItem({
    company,
    product,
    quantity,
  }: UpdateQuantityItemProps) {
    setItensOrder((state) => {
      const updateItem = state.map((item) => {
        if (item.company.cnpj === company.cnpj) {
          return {
            ...item,
            itens: item.itens.map((item) => {
              if (item.aplicationId === product.aplicationId) {
                const newQuantity =
                  item.quantity + quantity < 1 ? 1 : item.quantity + quantity
                return {
                  ...item,
                  quantity: newQuantity,
                }
              }
              return item
            }),
          }
        }
        return item
      })

      localStorage.setItem('itensOrder', JSON.stringify(updateItem))
      return updateItem
    })
  }

  function updateObservationItem({
    company,
    product,
    observation,
  }: UpdateObservationItemProps) {
    setItensOrder((state) => {
      const updateItem = state.map((item) => {
        if (item.company.cnpj === company.cnpj) {
          return {
            ...item,
            itens: item.itens.map((item) => {
              if (item.aplicationId === product.aplicationId) {
                return {
                  ...item,
                  observation,
                }
              }
              return item
            }),
          }
        }
        return item
      })

      localStorage.setItem('itensOrder', JSON.stringify(updateItem))
      return updateItem
    })
  }

  const deleteItemOrder = ({ company, product }: DeleteItemOrder) => {
    let updateItem
    setItensOrder((state) => {
      updateItem = state.map((item) => {
        if (item.company.cnpj === company.cnpj) {
          return {
            ...item,
            itens: item.itens.filter((item) => {
              if (item.aplicationId !== product.aplicationId) {
                return {
                  ...item,
                }
              }
              return false
            }),
          }
        }

        return item
      })

      const lengthItemCompany = updateItem.find(
        (item) => item.company.cnpj === company.cnpj,
      )

      if (lengthItemCompany?.itens.length === 0) {
        const filteredItensOrder = state.filter(
          (item) => item.company.cnpj !== company.cnpj,
        )
        localStorage.setItem('itensOrder', JSON.stringify(filteredItensOrder))
        return filteredItensOrder
      }

      localStorage.setItem('itensOrder', JSON.stringify(updateItem))
      return updateItem
    })
  }

  return (
    <AppContext.Provider
      value={{
        activeGroup,
        itensOrder,
        company,
        setCompanytag,
        handleActiveGroup,
        deleteOrder,
        addItemOrder,
        updateQuantityItem,
        updateObservationItem,
        deleteItemOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
