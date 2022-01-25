import { Roles } from './general'

export type CurrentUser = {
  id: number
  FullName: string
  Role: Roles
}

interface Plural<T> {
  count: number
  rows: T[]
}

export type Subject = {
  id: number
  Name: string
}

export type Teacher = {
  id: number
  FullName: string
  Subjects: Subject[]
}

export type Class = {
  id: number
  Number: number
  Subclass: string
}

export type Subjects = Plural<Subject>
export type Teachers = Plural<Teacher>
export type Classes = Plural<Class>
