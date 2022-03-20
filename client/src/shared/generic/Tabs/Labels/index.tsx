import React, { ReactNode, useState } from 'react'
import { useScrollable } from '../Scrollable/useScrollable'
import { ScrollableType } from '../Scrollable/types'
import ArrowSvg from '../arrow.svg'
import {
  StyledLabelContainer,
  LabelsContainer,
  Container,
  ArrowWrapper,
} from './styles'

interface ILabel {
  label: string
  active: boolean
  onClick: () => void
}

const Label = ({ label, active, onClick }: ILabel) => {
  return (
    <StyledLabelContainer onClick={onClick} active={active}>
      <span>{label}</span>
    </StyledLabelContainer>
  )
}

interface ILabels {
  children: ReactNode
  activeTab: string
  onChangeActiveTab: (tab: string) => void
}

export const Labels = ({ children, activeTab, onChangeActiveTab }: ILabels) => {
  const [scrollable, setScrollable] = useState<ScrollableType>()
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState<boolean>(false)
  const [isRightArrowVisible, setIsRightArrowVisible] = useState<boolean>(false)

  const onChange = (scrollable: ScrollableType) => {
    if (scrollable) {
      setScrollable(scrollable)
      setIsLeftArrowVisible(scrollable.isLeftArrowVisible)
      setIsRightArrowVisible(scrollable.isRightArrowVisible)
    }
  }

  const [scrollableRef] = useScrollable(onChange)

  return (
    <Container>
      {scrollable && isLeftArrowVisible && (
        <ArrowWrapper onClick={scrollable.scrollLeft}>
          <img src={ArrowSvg} alt="<" />
        </ArrowWrapper>
      )}

      <LabelsContainer ref={scrollableRef}>
        {React.Children.map(children, (child: any) => (
          <Label
            label={child.props.label}
            active={child.props.value === activeTab}
            onClick={() => onChangeActiveTab(child.props.value)}
          />
        ))}
      </LabelsContainer>

      {scrollable && isRightArrowVisible && (
        <ArrowWrapper onClick={scrollable.scrollRight}>
          <img src={ArrowSvg} alt=">" />
        </ArrowWrapper>
      )}
    </Container>
  )
}
