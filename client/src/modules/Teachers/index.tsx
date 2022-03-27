import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from 'store/root'
import { fetchTeachers } from 'store/slices/teachers'
import TableLayout from 'layouts/Table'
import { Table, usePagination, useSort } from 'generic/Table'

const TeachersModule: React.FC = () => {
  const { t } = useTranslation()
  const { limit, offset, selectedPage, selectPage } = usePagination()
  const [_sort, _order, changeSort] = useSort('id')

  const dispatch = useAppDispatch()
  const { teachers, loading } = useAppSelector((state) => state.teachersSlice)

  useEffect(() => {
    dispatch(fetchTeachers({ _page: offset, _limit: limit, _sort, _order }))
  }, [dispatch, _order, _sort, limit, offset])

  const { Columns, Header, Body } = Table

  return (
    <>
      <span>{t('Teachers')}</span>

      <TableLayout
        rowsCount={1}
        selectedPage={selectedPage}
        selectPage={selectPage}
        loading={loading}
      >
        <Table sortedBy={_sort} orderType={_order} changeSort={changeSort}>
          <Columns>
            <Columns.Col widthPercent={10} minWidth="5rem" />
            <Columns.Col widthPercent={45} minWidth="10rem" />
            <Columns.Col widthPercent={45} minWidth="10rem" />
          </Columns>
          <Header>
            <Header.Cell fieldName={'id'}>{t('id')}</Header.Cell>
            <Header.Cell fieldName={'FullName'}>{t('FullName')}</Header.Cell>
            <Header.Cell>{t('Subjects')}</Header.Cell>
          </Header>
          <Body>
            {teachers?.map((item) => (
              <Body.Row key={item.id}>
                <Body.Cell>{item.id}</Body.Cell>
                <Body.Cell>{item.FullName}</Body.Cell>
                <Body.Cell>
                  {item.Subjects.map((i) => i.Name).join(', ')}
                </Body.Cell>
              </Body.Row>
            ))}
          </Body>
        </Table>
      </TableLayout>
    </>
  )
}

export default TeachersModule
