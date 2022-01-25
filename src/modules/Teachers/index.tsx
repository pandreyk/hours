import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { getTeachers } from 'services/fakeApi'
import TableLayout from 'layouts/Table'
import { Table, usePagination } from 'generic/Table'
import { Teachers } from 'types/models'

const TeachersModule: React.FC = () => {
  const { t } = useTranslation()
  const { limit, offset, selectedPage, selectPage } = usePagination()

  const [data, setData] = useState<Teachers | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    getTeachers()
      .then((response) => setData(response))
      .finally(() => setLoading(false))
  }, [])

  const { Columns, Header, Body } = Table

  return (
    <>
      <span>{t('Teachers')}</span>

      <TableLayout
        countPages={data && data.count / limit}
        rowsCount={data?.count}
        selectedPage={selectedPage}
        selectPage={selectPage}
        loading={loading}
      >
        <Table>
          <Columns>
            <Columns.Col widthPercent={10} minWidth="10rem" />
            <Columns.Col widthPercent={45} minWidth="10rem" />
            <Columns.Col widthPercent={45} minWidth="10rem" />
          </Columns>
          <Header>
            <Header.Cell>{t('id')}</Header.Cell>
            <Header.Cell>{t('FullName')}</Header.Cell>
            <Header.Cell>{t('Subjects')}</Header.Cell>
          </Header>
          <Body>
            {data?.rows.map((item) => (
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
