import { useState } from 'react'

type Order = 'asc' | 'desc'
type Event = {
  target: { dataset: { fieldname: string } }
}
type Result = [string, Order, (e: Event) => void]

export const useSort = (initialSortedBy: string, order?: Order): Result => {
  const [sortedBy, setSortedBy] = useState<string>(initialSortedBy)
  const [orderType, setOrderType] = useState<Order>(order || 'asc')

  const changeSort = (e: Event) => {
    const dataset = { ...e.target.dataset }
    const { fieldname } = dataset

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
