import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function distanceDate(dateString: string) {
  const diference = formatDistanceToNow(dateString, {
    locale: ptBR,
    addSuffix: true,
  })

  return diference
}
