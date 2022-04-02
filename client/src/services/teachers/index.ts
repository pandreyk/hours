import { Teacher } from 'types/models'
import { connector } from '../connector'
import { getUrlParams, Params } from '../getUrlParams'

export const getTeachers = async (params: Params) => {
  return await connector.get<Teacher[]>(`teachers?${getUrlParams(params)}`)
}
