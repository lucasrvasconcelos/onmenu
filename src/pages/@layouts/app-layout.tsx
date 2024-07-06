import { Outlet } from 'react-router-dom'
import { Header } from '../app/components/Header/header'
import { AppProvider } from '../../context/app.context'

export function AppLayout() {
  return (
    <AppProvider>
      <Header />
      <Outlet />
    </AppProvider>
  )
}
