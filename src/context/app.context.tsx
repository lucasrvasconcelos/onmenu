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
  company: string
  itens: ItensOrder[]
}

// interface PreOrder {
//   id: number
//   itensOrder: ItensOrder[]
//   company: string
//   createAt: Date
//   status: string
// }

interface AppContextInterface {
  activeGroup?: ActiveGroup
  itensOrder: ItensOrder[]
  handleActiveGroup: (group?: ActiveGroup) => void
  addItemOrder: (item: ItensOrder) => void
}

export const AppContext = createContext({} as AppContextInterface)

interface AppProviderProps {
  children: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  const [activeGroup, setActiveGroup] = useState<ActiveGroup | undefined>(
    undefined,
  )

  const [itensOrder, setItensOrder] = useState<ItensOrder[]>(() => {
    const storedItensOrder = localStorage.getItem('itensOrder')
    return storedItensOrder ? JSON.parse(storedItensOrder) : []
  })

  // const [preOrder, setPreOrder] = useState<PreOrder>()

  console.log(itensOrder)

  function handleActiveGroup(group?: ActiveGroup) {
    setActiveGroup(group)
  }

  function addItemOrder(item: ItensOrder) {
    setItensOrder((prevItensOrder) => {
      const updatedItensOrder = [...prevItensOrder, item]
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
