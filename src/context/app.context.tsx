import { createContext, useState } from 'react'

export interface ActiveGroup {
  id: number
  description: string
  companyId: number
  groupSearchDescription: string
}

export interface ItensOrderType {
  id: number
  description: string
  quantity: number
  observation?: string
}

export interface ItensForCompany {
  company: string
  date: string
  itens: ItensOrderType[]
}

interface AppContextInterface {
  activeGroup?: ActiveGroup
  itensOrder: ItensForCompany[]
  handleActiveGroup: (group?: ActiveGroup) => void
  addItemOrder: (item: ItensForCompany) => void
  deleteOrder: (cnpj: string) => void
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

  return (
    <AppContext.Provider
      value={{
        activeGroup,
        itensOrder,
        handleActiveGroup,
        deleteOrder,
        addItemOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
