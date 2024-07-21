import { PageIndex } from './pages/index/page'
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './pages/@layouts/dafault-layout'
import { AppLayout } from './pages/@layouts/app-layout'
import { AppDelivery } from './pages/app/page'
import { Item } from './pages/app/pages/Item/page'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<PageIndex />} />
      </Route>

      <Route path="/app" element={<AppLayout header={true} footer={true} />}>
        <Route path="/app/:company" element={<AppDelivery />} />
      </Route>

      <Route path="/app" element={<AppLayout />}>
        <Route path="/app/:company/:proid/" element={<Item />} />
      </Route>
    </Routes>
  )
}
