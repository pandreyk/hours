import React, { useEffect } from 'react'
import { Link, generatePath } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AdminRoutesList } from 'pages/types'
import { useAppDispatch, useAppSelector } from 'store/root'
import { fetchClasses } from 'store/slices/classes'
import TableLayout from 'layouts/Table'
import { Table, usePagination, useSort } from 'generic/Table'
import { Title } from 'generic/Title'

const ClassesModule: React.FC = () => {
  const { t } = useTranslation()
  const { limit, offset, selectedPage, selectPage } = usePagination()
  const [_sort, _order, changeSort] = useSort('Number')

  const dispatch = useAppDispatch()
  const { classes, loading } = useAppSelector((state) => state.classesSlice)

  useEffect(() => {
    dispatch(fetchClasses({ _page: offset, _limit: limit, _sort, _order }))
  }, [dispatch, _order, _sort, limit, offset])

  const { Columns, Header, Body } = Table

  return (
    <>
      <span>{t('Classes')}</span>

      <TableLayout
        rowsCount={1}
        selectedPage={selectedPage}
        selectPage={selectPage}
        loading={loading}
      >
        <Table sortedBy={_sort} orderType={_order} changeSort={changeSort}>
          <Columns>
            <Columns.Col widthPercent={33} minWidth="5rem" />
            <Columns.Col widthPercent={33} minWidth="5rem" />
            <Columns.Col widthPercent={33} minWidth="5rem" />
          </Columns>
          <Header>
            <Header.Cell fieldName={'Number'}>{t('Number')}</Header.Cell>
            <Header.Cell fieldName={'Subclass'}>{t('Subclass')}</Header.Cell>
            <Header.Cell />
          </Header>
          <Body>
            {classes?.map((item) => (
              <Body.Row key={item.id}>
                <Body.Cell>{item.Number}</Body.Cell>
                <Body.Cell>{item.Subclass}</Body.Cell>
                <Body.Cell>
                  <Link
                    to={generatePath(AdminRoutesList.classSchedule, {
                      classId: item.id,
                    })}
                  >
                    <Title>go to schedule</Title>
                  </Link>
                </Body.Cell>
              </Body.Row>
            ))}
          </Body>
        </Table>
      </TableLayout>
    </>
  )
}

export default ClassesModule
