import { connector } from '../connector'
import { CurrentUser } from 'types/models'

export const getCurrentUser = async () => {
  return await connector.get<CurrentUser>('app/me')
}
