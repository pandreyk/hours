export type Params = {
  [key: string]: string | number | undefined | null
}

export const getUrlParams = (params: Params = {}): string => {
  const urlParams = new URLSearchParams()

  for (const key in params) {
    if (
      typeof params[key] !== 'undefined' &&
      String(params[key])?.trim() !== ''
    ) {
      urlParams.append(key, String(params[key]))
    }
  }

  return urlParams.toString()
}
