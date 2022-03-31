export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  avatar?: string
  id?: string
  age: number
  location: string
  gender: string
  phone: number
  bi: string
  admin?: boolean
}
