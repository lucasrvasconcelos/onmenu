import { useContext } from 'react'
import { AppContext } from './app.context'

export function UseAppContext() {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider')
  }

  return context
}
