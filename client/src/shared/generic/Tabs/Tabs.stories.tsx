import React, { useState } from 'react'
import { ITabs, Tabs } from './Tabs'
import { Story } from '@storybook/react'

export default {
  title: 'Components/Tabs',
  component: Tabs,
}

const Template: Story<ITabs> = (args) => {
  const [activeTab, setActiveTab] = useState<string>('1')

  const handleChangeActiveTab = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <Tabs activeTab={activeTab} onChangeActiveTab={handleChangeActiveTab}>
      <Tabs.Tab value={'1'} label="Test1">
        Content Test1
      </Tabs.Tab>
      <Tabs.Tab value={'2'} label="Test2">
        Content Test2
      </Tabs.Tab>
      <Tabs.Tab value={'3'} label="Test3">
        Content Test3
      </Tabs.Tab>
      <Tabs.Tab value={'4'} label="Test4">
        Content Test4
      </Tabs.Tab>
      <Tabs.Tab value={'5'} label="Test5">
        Content Test5
      </Tabs.Tab>
      <Tabs.Tab value={'6'} label="Test6">
        Content Test6
      </Tabs.Tab>
      <Tabs.Tab value={'7'} label="Test7">
        Content Test7
      </Tabs.Tab>
      <Tabs.Tab value={'8'} label="Test8">
        Content Test8
      </Tabs.Tab>
      <Tabs.Tab value={'9'} label="Test9">
        Content Test9
      </Tabs.Tab>
      <Tabs.Tab value={'10'} label="Test10">
        Content Test10
      </Tabs.Tab>
      <Tabs.Tab value={'11'} label="Test11">
        Content Test11
      </Tabs.Tab>
      <Tabs.Tab value={'12'} label="Test12">
        Content Test12
      </Tabs.Tab>
    </Tabs>
  )
}

export const Default = Template.bind({})
Default.args = {}
