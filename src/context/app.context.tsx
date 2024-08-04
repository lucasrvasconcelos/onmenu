import { createContext, useState } from 'react'
import { Item } from '../pages/app/components/DetailsOrder/order-pending'

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
  company: string
  date: string
  itens: ItemOrderType[]
}

export interface UpdateQuantityItemProps {
  company: string
  product: Item
  quantity: number
}

export interface UpdateObservationItemProps {
  company: string
  product: Item
  observation?: string
}

export interface DeleteItemOrder {
  company: string
  product: Item
}

interface AppContextInterface {
  activeGroup?: ActiveGroup
  itensOrder: ItensForCompany[]
  handleActiveGroup: (group?: ActiveGroup) => void
  addItemOrder: (item: ItensForCompany) => void
  deleteOrder: (cnpj: string) => void
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

  function deleteOrder(cnpj: string) {
    setItensOrder((state) => {
      const filteredItensOrder = state.filter((item) => item.company !== cnpj)
      localStorage.setItem('itensOrder', JSON.stringify(filteredItensOrder))
      return filteredItensOrder
    })
  }

  function addItemOrder(newItemOrder: ItensForCompany) {
    setItensOrder((prevItensOrder) => {
      const companyIndex = prevItensOrder.findIndex(
        (item) => item.company === newItemOrder.company,
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
        if (item.company === company) {
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
        if (item.company === company) {
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
        if (item.company === company) {
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
        (item) => item.company === company,
      )

      if (lengthItemCompany?.itens.length === 0) {
        const filteredItensOrder = state.filter(
          (item) => item.company !== company,
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
