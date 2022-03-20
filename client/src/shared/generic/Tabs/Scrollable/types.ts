export type ScrollableType = {
  node: HTMLDivElement
  isMouseIn: boolean
  isHorizontalScroll: boolean
  isLeftArrowVisible: boolean
  isRightArrowVisible: boolean
  scrollRight: () => void
  scrollLeft: () => void
}
