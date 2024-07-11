import { createContext, useState } from 'react'
import { Group, Profile } from './styled'
import { useParams } from 'react-router-dom'

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

interface AppContextInterface {
  company?: string
  groups?: Group[]
  activeGroup?: number
  profile: Profile
  seachbarDescription?: string

  handleGroup: (groups: Group[]) => void
  handleProfile: (profile: Profile) => void
  handleSeachbarDescription: (seachbarDescription?: string) => void
  handleActiveGroup: (groupid?: number) => void
}

export const AppContext = createContext({} as AppContextInterface)

interface AppProviderProps {
  children: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  const { company } = useParams()

  const [groups, setGroups] = useState<Group[]>()
  const [activeGroup, setActiveGroup] = useState<number | undefined>(undefined)
  const [profile, setProfile] = useState<Profile>(ApiProfile)
  const [seachbarDescription, setSeachbarDescription] = useState<
    string | undefined
  >(profile.seachbardescription)

  function handleGroup(groups: Group[]) {
    setGroups(groups)
  }

  function handleProfile(profile: Profile) {
    setProfile(profile)
  }

  function handleSeachbarDescription(seachbarDescription?: string) {
    console.log(seachbarDescription)
    if (seachbarDescription) {
      setSeachbarDescription(profile.seachbardescription)
    }
    setSeachbarDescription(seachbarDescription)
  }

  function handleActiveGroup(groupid?: number) {
    setActiveGroup(groupid)
  }

  return (
    <AppContext.Provider
      value={{
        company,
        groups,
        profile,
        seachbarDescription,
        activeGroup,
        handleGroup,
        handleProfile,
        handleSeachbarDescription,
        handleActiveGroup,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
