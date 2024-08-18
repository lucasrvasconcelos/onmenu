export interface Profile {
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  country: string
  zipCode: string
  cpf: string
  cnpj: string
  company: string
  avatarUrl: string
  seachbardescription: string
}

export interface Company {
  id: number
  cnpj: string
  socialReason: string
  fantasyName: string
  tag: string | null
}
