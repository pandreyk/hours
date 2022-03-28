import React from 'react'
import { useTranslation } from 'react-i18next'
import { Draggable } from 'generic/Draggable'
import { Title } from 'generic/Title'
import { Container, Columns, PepegaColumn, PepagaItem } from './styles'

const cards = [
  { id: 1, Name: '1', dropId: 1 },
  { id: 2, Name: '2', dropId: 1 },
  { id: 3, Name: '3', dropId: 5 },
  { id: 4, Name: '4', dropId: 1 },
  { id: 5, Name: '5', dropId: 2 },
  { id: 6, Name: '6', dropId: 4 },
  { id: 7, Name: '7', dropId: 5 },
  { id: 8, Name: '8', dropId: 1 },
  { id: 9, Name: '9', dropId: 1 },
  { id: 10, Name: '10', dropId: 2 },
  { id: 11, Name: '12', dropId: 2 },
  { id: 12, Name: '13', dropId: 2 },
  { id: 13, Name: '14', dropId: 6 },
  { id: 14, Name: '15', dropId: 2 },
  { id: 15, Name: '16', dropId: 7 },
  { id: 16, Name: '17', dropId: 2 },
  { id: 17, Name: '18', dropId: 7 },
  { id: 18, Name: '19', dropId: 2 },
  { id: 10, Name: '20', dropId: 4 },
  { id: 11, Name: '22', dropId: 3 },
  { id: 12, Name: '23', dropId: 3 },
  { id: 13, Name: '24', dropId: 7 },
  { id: 14, Name: '25', dropId: 3 },
  { id: 15, Name: '26', dropId: 7 },
  { id: 16, Name: '27', dropId: 3 },
  { id: 17, Name: '28', dropId: 4 },
  { id: 18, Name: '29', dropId: 3 },
]

const weekDays: { id: number; name: string }[] = [
  { id: 1, name: 'Monday' },
  { id: 2, name: 'Tuesday' },
  { id: 3, name: 'Wednesday' },
  { id: 4, name: 'Thursday' },
  { id: 5, name: 'Friday' },
  { id: 6, name: 'Saturday' },
  { id: 7, name: 'Sunday' },
]

const ScheduleModule: React.FC = () => {
  const { t } = useTranslation()

  const drop1 = cards.filter((i) => i.dropId === 1)
  const drop2 = cards.filter((i) => i.dropId === 2)
  const drop3 = cards.filter((i) => i.dropId === 3)

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
    <Container>
      <span>{t('Schedule')}</span>

      <Columns>
        {weekDays.map((item) => (
          <PepegaColumn key={item.id}>
            <Title>{item.name}</Title>
            <Draggable.Column
              dropId={String(item.id)}
              dragHeight={60}
              width={'11rem'}
            >
              {cards
                .filter((i) => i.dropId === item.id)
                .map((item) => (
                  <Draggable.Item
                    onDrop={(dragComponent) => onDrop(dragComponent, item.id)}
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
        ))}
      </Columns>
    </Container>
  )
}

export default ScheduleModule
