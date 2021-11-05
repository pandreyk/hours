import React from 'react'
import { Button } from './Button'

export default {
  title: 'Components/Button',

  component: Button,
  argTypes: {
    inverted: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'button',
  inverted: false,
}
