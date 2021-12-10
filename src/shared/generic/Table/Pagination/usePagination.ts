import { useState } from 'react'

export const usePagination = (limit = 100) => {
  const [newLimit, setLimit] = useState<number>(limit)
  const [offset, setOffset] = useState<number>(0)
  const [selectedPage, setSelectedPage] = useState<number>(0)

  const selectPage = (i: number) => {
    setOffset(i * newLimit)
    setSelectedPage(i)
  }

  return { limit: newLimit, offset, selectedPage, selectPage, setLimit }
}
