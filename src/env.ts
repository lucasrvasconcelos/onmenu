import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z
    .string({ message: 'Não é uma string' })
    .url('Não é uma URL válida'),
})

console.log(import.meta.env.VITE_API_URL)
export const env = envSchema.parse({
  VITE_API_URL: import.meta.env.VITE_API_URL,
})
