import { getUrlParams } from 'services/getUrlParams'
import { Teacher } from 'types/models'
import { connector } from '../connector'
import { Params } from '../types'

export const getTeachers = async (params?: Params) => {
  return await connector.get<Teacher[]>(`teachers?${getUrlParams(params)}`)
}
