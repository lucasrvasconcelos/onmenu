import { api } from '../lib/axios'

interface GetGroups {
  error?: {
    message: string
  }
  data?: {
    id: number
    companyId: number
    description: string
    groupSearchDescription: string
    imageUrl: string
  }[]
}

interface GetGroupsProps {
  company?: string
  group?: string | null
}

export async function getGroups({ company, group }: GetGroupsProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const { data } = await api.get<GetGroups>(`/app/${company}/groups`, {
    params: {
      group,
    },
  })

  return data
}
