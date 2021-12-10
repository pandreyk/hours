import React from 'react'
import { Story } from '@storybook/react'
import { Table } from './Table'
import { useSort } from './Sort/useSort'
import { ITable } from './interfaces'

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    height: {
      defaultValue: '200px',
    },
  },
}

const data = [
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
  { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' },
]

const Template: Story<ITable> = (args) => {
  const [sortedBy, orderType, changeSort] = useSort('A')

  const { Columns, Header, Body } = Table

  return (
    <Table
      orderType={orderType}
      sortedBy={sortedBy}
      changeSort={changeSort}
      {...args}
    >
      <Columns>
        <Columns.Col widthPercent={20} minWidth="5rem" />
        <Columns.Col widthPercent={10} minWidth="6rem" />
        <Columns.Col widthPercent={10} minWidth="10rem" />
        <Columns.Col widthPercent={10} minWidth="6rem" />
        <Columns.Col widthPercent={10} minWidth="6rem" />
        <Columns.Col widthPercent={10} minWidth="6rem" />
        <Columns.Col widthPercent={10} minWidth="6rem" />
        <Columns.Col widthPercent={10} minWidth="16rem" />
        <Columns.Col widthPercent={10} minWidth="6rem" />
      </Columns>
      <Header>
        <Header.Cell fieldName="A">Column A</Header.Cell>
        <Header.Cell>Column B</Header.Cell>
        <Header.Cell fieldName="C">Column C</Header.Cell>
        <Header.Cell>Column D</Header.Cell>
        <Header.Cell>Column E</Header.Cell>
        <Header.Cell>Column F</Header.Cell>
        <Header.Cell>Column G</Header.Cell>
        <Header.Cell>Column I</Header.Cell>
        <Header.Cell>Column H</Header.Cell>
      </Header>
      <Body>
        {data.map((item, index) => (
          <Body.Row key={index}>
            <Body.Cell>
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Body.Cell>
            <Body.Cell>{item.b}</Body.Cell>
            <Body.Cell>{item.c}</Body.Cell>
            <Body.Cell>{item.d}</Body.Cell>
            <Body.Cell>{item.e}</Body.Cell>
            <Body.Cell>{item.f}</Body.Cell>
            <Body.Cell>{item.g}</Body.Cell>
            <Body.Cell>{item.i}</Body.Cell>
            <Body.Cell>{item.h}</Body.Cell>
          </Body.Row>
        ))}
      </Body>
    </Table>
  )
}

export const Default = Template.bind({})

Default.args = {}
