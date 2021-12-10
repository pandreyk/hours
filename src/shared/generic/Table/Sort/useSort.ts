import { useState } from 'react'

type order = 'asc' | 'desc'
type event = {
  target: { dataset: { fieldname: string } }
}
type result = [string, order, (e: event) => void]

export const useSort = (initialSortedBy: string, order?: order): result => {
  const [sortedBy, setSortedBy] = useState<string>(initialSortedBy)
  const [orderType, setOrderType] = useState<order>(order || 'asc')

  const changeSort = (e: event) => {
    const dataset = { ...e.target.dataset }
    const { fieldname } = dataset

    if (!fieldname) return

    if (fieldname !== sortedBy) {
      setSortedBy(fieldname)
      setOrderType('asc')
    } else {
      setOrderType((prev: order) => (prev === 'asc' ? 'desc' : 'asc'))
    }
  }

  return [sortedBy, orderType, changeSort]
}
