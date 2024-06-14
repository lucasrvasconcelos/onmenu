import { createBrowserRouter } from 'react-router-dom'
import { PageIndex } from './pages/index/page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageIndex />,
  },
])
