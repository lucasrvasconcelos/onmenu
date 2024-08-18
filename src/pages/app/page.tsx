import { useParams } from 'react-router-dom'
import { Groups } from './components/Groups/groups'
import { Popular } from './components/Popular/popular'
import { AppContainer } from './page.styled'
import { useQuery } from '@tanstack/react-query'
import { getCompany } from '../../api/get-company'

export function AppDelivery() {
  const { companytag } = useParams<{ companytag: string }>()
  const { data: company } = useQuery({
    queryKey: ['profile-company', companytag],
    queryFn: () => getCompany({ company: companytag }),
    enabled: !!companytag,
  })

  const margin =
    (company?.data?.primaryDescription ? 195 : 0) +
    (company?.data?.secondaryDescription ? 20 : 0)
  return (
    <AppContainer>
      <Groups margintop={margin > 0 ? margin + 'px' : '140px'} />
      <Popular />
    </AppContainer>
  )
}
