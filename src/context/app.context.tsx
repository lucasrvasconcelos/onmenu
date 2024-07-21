import { createContext, useState } from 'react'
import { Profile } from './styled'

/// ////////////////////// API /////////////////////////////////
const ApiProfile: Profile = {
  name: 'Lucas rodrigues',
  email: 'lucasrodrigues@outlook.com',
  phone: '11 99999-9999',
  address: 'Rua das Flores, 123',
  city: 'São Paulo',
  state: 'SP',
  country: 'Brasil',
  zipCode: '12345-678',
  cpf: '123.456.789-10',
  cnpj: '12.345.678/0001-10',
  company: 'Lucas rodrigues',
  avatarUrl: 'https://picsum.photos/200/300?random=1',
  seachbardescription: 'Search our delicious burgers(PROFILE)',
}

export interface ActiveGroup {
  id: number
  description: string
  companyId: number
  groupSearchDescription: string
}

interface AppContextInterface {
  activeGroup?: ActiveGroup
  profile: Profile

  handleProfile: (profile: Profile) => void
  handleActiveGroup: (group?: ActiveGroup) => void
}

export const AppContext = createContext({} as AppContextInterface)

interface AppProviderProps {
  children: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  const [activeGroup, setActiveGroup] = useState<ActiveGroup | undefined>(
    undefined,
  )
  const [profile, setProfile] = useState<Profile>(ApiProfile)

  function handleProfile(profile: Profile) {
    setProfile(profile)
  }

  function handleActiveGroup(group?: ActiveGroup) {
    setActiveGroup(group)
  }

  return (
    <AppContext.Provider
      value={{
        profile,
        activeGroup,
        handleProfile,
        handleActiveGroup,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
