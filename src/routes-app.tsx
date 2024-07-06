import { PageIndex } from './pages/index/page'
import { NotFound } from './404'
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './pages/@layouts/dafault-layout'
import { AppLayout } from './pages/@layouts/app-layout'
import { AppDelivery } from './pages/app/page'
import { Item } from './pages/app/pages/page.styled'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<PageIndex />} />
      </Route>

      <Route path="/app" element={<AppLayout />}>
        <Route path="/app/:company" element={<AppDelivery />} />
        <Route path="/app/:company/popular" element={<AppDelivery />} />
      </Route>

      <Route path="/app">
        <Route path="/app/:company/item/:proid" element={<Item />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
