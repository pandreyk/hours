export interface IParams {
  [key: string]: string
}

export const getUrlParams = (params: IParams = {}): string => {
  const upperCaseFirst = (str: string): string => {
    if (!str) return str
    return str[0].toUpperCase() + str.slice(1)
  }

  const urlParams = new URLSearchParams()

  for (const key in params) {
    if (params[key] !== null) {
      urlParams.append(upperCaseFirst(key), params[key])
    }
  }
  return urlParams.toString()
}
