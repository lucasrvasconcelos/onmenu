import { createContext, useState } from 'react'

export interface ActiveGroup {
  id: number
  description: string
  companyId: number
  groupSearchDescription: string
}

export interface ItensOrder {
  id: number
  description: string
  quantity: number
  observation?: string
}

export interface ItensForCompany {
  company?: string
  date: string
  itens: ItensOrder[]
}

interface AppContextInterface {
  activeGroup?: ActiveGroup
  itensOrder: ItensForCompany[]
  handleActiveGroup: (group?: ActiveGroup) => void
  addItemOrder: (item: ItensForCompany) => void
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

  console.log(itensOrder)

  function handleActiveGroup(group?: ActiveGroup) {
    setActiveGroup(group)
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
        addItemOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
