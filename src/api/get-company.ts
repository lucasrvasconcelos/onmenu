import { api } from '../lib/axios'

export async function getCompany() {
  // await api.post('/company')
  const { data } = await api.get('/me')

  return data
}
