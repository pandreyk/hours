import React, { ReactNode } from 'react'
import Pagination from 'generic/Table/Pagination'
import {
  Layout,
  TableContainer,
  LoaderContainer,
  LeftTopAnchor,
  IconWrapper,
  PaginationContainer,
} from './styles'

interface ITableLayout {
  children: ReactNode
  countPages?: number
  rowsCount?: number
  selectedPage: number
  selectPage: (i: number) => void
  plusClick?: () => void
  loading?: boolean
}

const TableLayout: React.FC<ITableLayout> = ({
  children,
  countPages = 1,
  rowsCount,
  selectedPage,
  selectPage,
  plusClick,
  loading,
}) => {
  return (
    <Layout>
      <TableContainer>
        {plusClick && (
          <LeftTopAnchor>
            <IconWrapper onClick={plusClick}>
              <span>+</span>
            </IconWrapper>
          </LeftTopAnchor>
        )}
        {loading && <LoaderContainer>Loading...</LoaderContainer>}
        {children}
      </TableContainer>
      <PaginationContainer>
        <Pagination
          countPages={countPages}
          selectedPage={selectedPage}
          selectPage={selectPage}
        />
      </PaginationContainer>
      {!loading && !rowsCount && <span>No data</span>}
    </Layout>
  )
}

export default TableLayout
