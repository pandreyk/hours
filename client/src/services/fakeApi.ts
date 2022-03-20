import teachers from 'mocks/teachers.json'
import { Teachers } from 'types/models'

export const getTeachers = (): Promise<Teachers> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ count: teachers.length, rows: teachers })
    }, 500)
  })
}
