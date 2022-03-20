export const getUser = (): string | null => {
  return localStorage.getItem('user')
}

export const setUser = (jwt: string) => {
  localStorage.setItem('user', jwt)
}

export const setLocale = (locale: string) => {
  localStorage.setItem('locale', locale)
}
