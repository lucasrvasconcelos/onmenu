export function formatCurrency(value: number) {
  const currency = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return currency
}
