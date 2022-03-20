import { Teachers } from 'types/models'
import { connector } from '../connector'

export const getTrueTeachers = async () => {
  return await connector.get<Teachers>('teachers')
}
