import React, { ReactNode } from 'react'

export interface ITable {
  children: ReactNode
  height?: string
  orderType?: string
  sortedBy?: string
  changeSort?: (e: any) => void
}

export interface ITableColumns {
  children?: ReactNode
}

export interface ITableColumnsCol {
  minWidth?: string
  maxWidth?: string
  widthPercent?: number
  tableWidth?: number
  backgroundColor?: string
  style?: React.CSSProperties
}

export interface ITableHeader {
  children: ReactNode
  orderType?: string
  sortedBy?: string
  changeSort?: (e: any) => void
}

export interface ITableHeaderCell {
  children?: ReactNode
  orderType?: string
  sortedBy?: string
  fieldName?: string
}

export interface ITableBody {
  children: ReactNode
}

export interface ITableBodyRow {
  children: ReactNode
  style?: React.CSSProperties
  isVerticalScroll?: boolean
}

export interface ITableBodyCell {
  children: ReactNode
  style?: React.CSSProperties
  overflow?: string
}
