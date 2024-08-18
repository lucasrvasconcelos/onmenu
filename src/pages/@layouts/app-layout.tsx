import { Outlet } from 'react-router-dom'
import { Header } from '../app/components/Header/header'
import { Footer } from '../app/components/Footer/footer'

interface AppLayoutProps {
  header?: boolean
  footer?: boolean
}

export function AppLayout({ header, footer }: AppLayoutProps) {
  return (
    <>
      {header && <Header />}
      <Outlet />
      {footer && <Footer />}
    </>
  )
}
