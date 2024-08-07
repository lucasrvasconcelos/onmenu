import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster
      richColors={true}
      expand={true}
      position="top-center"
      theme="light"
    />
    <App />
  </React.StrictMode>,
)
