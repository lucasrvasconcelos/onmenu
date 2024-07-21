import { Outlet, useParams } from 'react-router-dom'
import { Header } from '../app/components/Header/header'
import { AppProvider } from '../../context/app.context'
import { Footer } from '../app/components/Footer/footer'
import { getCompany } from '../../api/get-company'
import { useQuery } from '@tanstack/react-query'

interface AppLayoutProps {
  header?: boolean
  footer?: boolean
}

export function AppLayout({ header, footer }: AppLayoutProps) {
  const params = useParams()

  const { data: company, isFetching } = useQuery({
    queryKey: ['profile-company'],
    queryFn: () => getCompany({ company: params.company }),
  })

  if (!company) {
    console.log('Company não definida')
  }

  return (
    <AppProvider>
      {company?.data && (
        <>
          {header && <Header company={company} isFetching={isFetching} />}
          <Outlet />
          {footer && <Footer />}
        </>
      )}
    </AppProvider>
  )
}
