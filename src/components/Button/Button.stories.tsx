import React, { ReactNode } from 'react'
import { Story } from '@storybook/react'
import { Button } from './Button'

interface IButton {
  children: string | ReactNode
  inverted?: boolean
}

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

const Template: Story<IButton> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  inverted: false,
  children: 'Button',
}
