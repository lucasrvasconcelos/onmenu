import { BrowserRouter, useParams } from 'react-router-dom'
import { Router } from './routes-app'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import 'swiper/css'
import { AppProvider } from './context/app.context'

export function App() {
  const { companytag } = useParams<{ companytag: string }>()
  console.log(companytag)
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={DefaultTheme}>
        <BrowserRouter>
          <AppProvider>
            <GlobalStyle />
            <Router />
          </AppProvider>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
