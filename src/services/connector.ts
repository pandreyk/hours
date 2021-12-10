import { getUser } from 'helpers/currentUser'

const jwt = 'jwt'

interface IResponse<T> {
  status: number
  ok: boolean
  data?: T
  error?: unknown
}

const request = async <T>(
  path: string,
  { method, body }: RequestInit,
): Promise<IResponse<T>> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getUser() || jwt}`,
      },
      body: JSON.stringify(body),
    })

    const data =
      response.headers.get('Content-Type')?.includes('application/json') &&
      (await response.json())

    return {
      status: response.status,
      ok: response.ok,
      data,
    }
  } catch (error) {
    return {
      status: 500,
      ok: false,
      error,
    }
  }
}

export const connector = {
  get: async <TResponse>(path: string) => {
    return await request<TResponse>(path, { method: 'GET' })
  },
  post: async <TBody extends BodyInit, TResponse>(
    path: string,
    payload: TBody,
  ) => {
    return await request<TResponse>(path, { method: 'POST', body: payload })
  },
  patch: async <TBody extends BodyInit, TResponse>(
    path: string,
    payload: TBody,
  ) => {
    return await request<TResponse>(path, { method: 'PATCH', body: payload })
  },
  delete: async <TResponse>(path: string) => {
    return await request<TResponse>(path, { method: 'DELETE' })
  },
}
