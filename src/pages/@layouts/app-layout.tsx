import { Outlet } from 'react-router-dom'
import { Header } from '../app/components/Header/header'
import { AppProvider } from '../../context/app.context'
import { Footer } from '../app/components/Footer/footer'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../lib/react-query'

export function AppLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Header />
        <Outlet />
        <Footer />
      </AppProvider>
    </QueryClientProvider>
  )
}
