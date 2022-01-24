import { useState } from 'react'
import { ChangeSort } from '../types'

type Order = 'asc' | 'desc'
type Result = [string, Order, ChangeSort]

export const useSort = (initialSortedBy: string, order?: Order): Result => {
  const [sortedBy, setSortedBy] = useState<string>(initialSortedBy)
  const [orderType, setOrderType] = useState<Order>(order || 'asc')

  const changeSort = (fieldname?: string) => {
    if (!fieldname) return

    if (fieldname !== sortedBy) {
      setSortedBy(fieldname)
      setOrderType('asc')
    } else {
      setOrderType((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    }
  }

  return [sortedBy, orderType, changeSort]
}
