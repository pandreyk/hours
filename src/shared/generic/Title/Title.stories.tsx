import React from 'react'
import { Story } from '@storybook/react'
import { ITitle, Title } from './Title'

export default {
  title: 'Components/Title',
  component: Title,
}

const Template: Story<ITitle> = (args) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'A title',
  as: 'h2',
  color: 'white',
  upperCase: false,
}
