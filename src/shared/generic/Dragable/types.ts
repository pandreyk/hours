export type Root = HTMLDivElement
export type Drop = (
  draggedComponent: HTMLDivElement,
  ...args: unknown[]
) => void
export type Hover = (elem: HTMLElement) => void
export type HoverOut = (elem: HTMLElement) => void
