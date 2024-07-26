import axios from 'axios'
import { env } from '../env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: false,
})

// api.interceptors.response.use(async (config) => {
//   await new Promise((resolve) => setTimeout(resolve, 5000))
//   return config
// })
