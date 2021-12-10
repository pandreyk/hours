import { Roles } from './general'

export type CurrentUser = {
  id: number
  Username: string
  FirstName: string
  LastName: string
  Email: string
  Group: { id: number; Name: string; Role: Roles }
}
