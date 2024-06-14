import { Outlet } from 'react-router-dom'
import { HeaderApp } from '../app/components/header-app/header-app'

export function AppLayout() {
  return (
    <div>
      <HeaderApp />
      <Outlet />
    </div>
  )
}
