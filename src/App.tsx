import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes-app'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import 'swiper/css'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={DefaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
