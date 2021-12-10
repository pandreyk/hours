import React, { ReactNode } from 'react'
import { StyledTab, TabsContainer } from './styles'
import { Labels } from './Labels'

export interface ITabs {
  children: ReactNode
  activeTab: string
  onChangeActiveTab: (tab: string) => void
}

const Tabs = ({ children, activeTab, onChangeActiveTab }: ITabs) => {
  return (
    <TabsContainer>
      <Labels onChangeActiveTab={onChangeActiveTab} activeTab={activeTab}>
        {children}
      </Labels>
      {React.Children.map(
        children,
        (child: any) =>
          child.props.value === activeTab && React.cloneElement(child),
      )}
    </TabsContainer>
  )
}

interface ITab {
  children: ReactNode
  value: string
  label: string
}

const Tab = ({ children }: ITab) => {
  return <StyledTab>{children}</StyledTab>
}

Tabs.Tab = Tab

export { Tabs }
