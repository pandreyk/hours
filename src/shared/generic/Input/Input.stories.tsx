import React from 'react'
import { Story } from '@storybook/react'
import { IInput, Input } from './Input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {},
}

const Template: Story<IInput> = (args) => <Input {...args} />

export const Default = Template.bind({})

Default.args = {}
