import styled from '@emotion/styled'
import { colors } from '../../themes'

const border = `solid 1px ${colors.black}`

export const Container = styled.div`
  position: relative;
  overflow: hidden;

  :hover {
    > div:first-of-type,
    > div:last-of-type {
      opacity: 1;
    }
  }
`

export const ArrowWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${colors.primaryLight};
  padding: 0.3rem 0.6rem;
  opacity: 0;
  z-index: 10;
  cursor: pointer;
  transition: all 0.3s ease;

  img {
    transition: all 0.3s ease;
    width: 22px;

    &:hover {
      transform: scale(1.03);
    }
  }

  :first-of-type {
    left: 0;

    img {
      transform: rotate(180deg);
    }
  }

  :last-of-type {
    right: 0;
  }
`

export const LabelsContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  background-color: ${colors.white};
  border-left: ${border};
  border-right: ${border};
  scroll-behavior: smooth;
  border-top: ${border};
`

interface IStyledLabel {
  active: boolean
}

export const StyledLabelContainer = styled.span<IStyledLabel>`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  padding: 0 1.5rem;
  cursor: pointer;
  z-index: 1;

  > span {
    font-size: 26px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: ${({ active }) =>
      colors[active ? 'secondaryLight' : 'white']};
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ active }) =>
      colors[active ? 'secondaryLight' : 'white']};
    transform: skew(45deg, 0deg);
    border-bottom: ${({ active }) => (active ? 'none' : border)};
    box-shadow: -2px 0 0 0 rgb(0, 0, 0) inset; // its border
    z-index: -1;
  }

  &:first-of-type {
    &:before {
      left: -20px;
      border-bottom: ${({ active }) => (active ? 'none' : border)};
    }
  }

  &:last-of-type {
    &:before {
      right: -20px;
      background-color: ${({ active }) =>
        colors[active ? 'secondaryLight' : 'white']};
      border-bottom: ${({ active }) => (active ? 'none' : border)};
    }
    &:after {
      box-shadow: none;
    }
  }
`
