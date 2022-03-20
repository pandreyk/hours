import React, { ReactNode } from 'react'
import { Story } from '@storybook/react'
import { Button } from './Button'

interface IButton {
  children: string | ReactNode
  disabled?: boolean
}

export default {
  title: 'Components/Button',

  component: Button,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const Template: Story<IButton> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  disabled: false,
  children: 'Button',
}
