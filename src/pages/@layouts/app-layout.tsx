import { Outlet } from 'react-router-dom'
import { Header } from '../app/components/Header/header'
import { AppProvider } from '../../context/app.context'
import { Footer } from '../app/components/Footer/footer'

export function AppLayout() {
  return (
    <AppProvider>
      <Header />
      <Outlet />
      <Footer />
    </AppProvider>
  )
}
