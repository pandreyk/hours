export class Scrollable {
  constructor(root, onChange) {
    this.node = root
    this.isHorizontalScroll = root.scrollWidth - root.clientWidth > 20
    this.isLeftArrowVisible = this.isHorizontalScroll && root.scrollLeft > 0
    this.isRightArrowVisible =
      this.isHorizontalScroll && root.scrollLeft < root.scrollWidth
    this.onChange = onChange

    this.scrollRight = this.scrollRight.bind(this)
    this.scrollLeft = this.scrollLeft.bind(this)
    this.onMouseMoveEvent = this.onMouseMove.bind(this)

    root.addEventListener('mousemove', this.onMouseMoveEvent)
  }

  destroy() {
    this.node.removeEventListener('mousemove', this.onMouseMoveEvent)
  }

  setScroll(newScrollLeft) {
    this.node.scrollLeft = newScrollLeft
    this.isLeftArrowVisible = this.isHorizontalScroll && newScrollLeft > 0
    this.isRightArrowVisible =
      this.isHorizontalScroll &&
      this.node.scrollWidth >= newScrollLeft + this.node.clientWidth
    this.onChange(this)
  }

  scrollRight() {
    const newScrollLeft = this.node.scrollLeft + this.node.clientWidth / 2
    this.setScroll(newScrollLeft)
  }

  scrollLeft() {
    const newScrollLeft = this.node.scrollLeft - this.node.clientWidth / 2
    this.setScroll(newScrollLeft)
  }

  onMouseMove() {
    this.onChange(this)
  }
}
