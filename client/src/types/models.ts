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

export type Pupil = {
  id: number
  Number: number
  Subclass: string
}

export type Lesson = {
  SubjectId: number
  TeacherId: number
  ClassId: number
  Grades: Grade[]
}

export type Grade = {
  PupilId: number
  Grade: number
}

export type Schedule = {
  id: number
  ClassId: number
  Monday: number[] // SubjectIds
  Tuesday: number[]
  Wednesday: number[]
  Thursday: number[]
  Friday: number[]
  Saturday: number[]
  Sunday: number[]
}

export type Subjects = Plural<Subject>
export type Teachers = Plural<Teacher>
export type Classes = Plural<Class>
export type Pupils = Plural<Pupil>
export type Lessons = Plural<Lesson>
