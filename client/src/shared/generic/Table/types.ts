import { ReactNode, CSSProperties } from 'react'

type Aligns = 'flex-start' | 'center' | 'flex-end'

export type ChangeSort = (fieldname?: string) => void

export interface Table {
  children: ReactNode
  height?: string
  orderType?: string
  sortedBy?: string
  changeSort?: ChangeSort
}

export interface TableColumns {
  children?: ReactNode
}

export interface TableColumnsCol {
  minWidth?: string
  maxWidth?: string
  widthPercent?: number
  tableWidth?: number
  backgroundColor?: string
  style?: CSSProperties
}

export interface TableHeader {
  children: ReactNode
  orderType?: string
  sortedBy?: string
}

export interface TableHeaderCell {
  children?: ReactNode
  changeSort?: ChangeSort
  orderType?: string
  sortedBy?: string
  fieldName?: string
  align?: Aligns
}

export interface TableBody {
  children: ReactNode
}

export interface TableBodyRow {
  children: ReactNode
  style?: CSSProperties
}

export interface TableBodyCell {
  children: ReactNode
  align?: Aligns
  style?: CSSProperties
  overflow?: string
}
