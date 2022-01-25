import styled from '@emotion/styled'
import { Color, colors, shadows } from '../../themes'

interface IPaginationStyle {
  backgroundColor: Color
  color: Color
}

export const Container = styled.div`
  display: flex;
  padding-top: 1rem;
  justify-content: center;
  margin: 0 0 1rem;

  > * {
    margin: 0 0.3rem;
  }
`

export const RightArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  > img {
    width: 22px;
    height: 22px;
  }
`

export const LeftArrowWrapper = styled(RightArrowWrapper)`
  > img {
    transform: rotate(180deg);
  }
`

export const StyledPaginationButton = styled.button<IPaginationStyle>`
  padding: 0.3rem 0.9rem;
  line-height: 1.5rem;
  background-color: ${({ backgroundColor }) => colors[backgroundColor]};
  white-space: nowrap;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  color: ${({ color }) => colors[color]};
  filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.25));

  &:hover {
    box-shadow: ${shadows.hover};
    transform: scale(1.03);
  }
  &:active {
    box-shadow: ${shadows.active};
    transform: scale(0.98);
  }
`
