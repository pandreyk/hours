import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Draggable } from 'generic/Dragable'
import { Container, PepegaColumn, PepagaItem } from './styles'

const Classes = {
  assigned: 'assigned',
  unassigned: 'unassigned',
}

const zones = [
  { id: 1, Name: 'Assigned1', assigned: true },
  { id: 2, Name: 'Assigned2', assigned: true },
  { id: 3, Name: 'Assigned3', assigned: true },
  { id: 4, Name: 'Assigned4', assigned: true },
  { id: 5, Name: 'Assigned5', assigned: true },
  { id: 6, Name: 'Assigned6', assigned: true },
  { id: 7, Name: 'Assigned7', assigned: true },
  { id: 8, Name: 'Assigned8', assigned: true },
  { id: 9, Name: 'Assigned9', assigned: true },
  { id: 10, Name: 'Unassigned1', assigned: false },
  { id: 11, Name: 'Unassigned2', assigned: false },
  { id: 12, Name: 'Unassigned3', assigned: false },
  { id: 13, Name: 'Unassigned4', assigned: false },
  { id: 14, Name: 'Unassigned5', assigned: false },
  { id: 15, Name: 'Unassigned6', assigned: false },
  { id: 16, Name: 'Unassigned7', assigned: false },
  { id: 17, Name: 'Unassigned8', assigned: false },
  { id: 18, Name: 'Unassigned9', assigned: false },
]

const Assignment: React.FC = () => {
  const { t } = useTranslation()

  const onDrop = async (dragComponent: any, zoneId?: number) => {
    console.log(dragComponent)
    console.log(zoneId)
  }

  const onHoverDropZone = (elem: HTMLElement) => {
    elem.style.background = 'red'
  }

  const onHoverOutDropZone = (elem: HTMLElement) => {
    elem.style.background = ''
  }

  return (
    <>
      <span>{t('Assignment')}</span>
      <Container>
        <PepegaColumn>
          <Draggable.Column className={Classes.assigned} dragHeight={60}>
            {zones.map((item) => (
              <Draggable.Item
                onDrop={(dragComponent) => onDrop(dragComponent, item.id)}
                droppedClassName={Classes.unassigned}
                handleClassName="handle"
                onHover={onHoverDropZone}
                onHoverOut={onHoverOutDropZone}
                key={item.id}
              >
                <PepagaItem className="handle">
                  <span>{item.Name}</span>
                </PepagaItem>
              </Draggable.Item>
            ))}
          </Draggable.Column>
        </PepegaColumn>
      </Container>
    </>
  )
}

export default Assignment
