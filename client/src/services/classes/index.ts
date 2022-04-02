import { Class } from 'types/models'
import { connector } from '../connector'
import { getUrlParams, Params } from '../getUrlParams'

export const getClasses = async (params: Params) => {
  return await connector.get<Class[]>(`classes?${getUrlParams(params)}`)
}
