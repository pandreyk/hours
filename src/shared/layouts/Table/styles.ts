import styled from '@emotion/styled'
import { colors } from 'generic/themes'

export const Layout = styled.div`
  position: relative;
  height: 100%;
`

export const TableContainer = styled.div`
  height: calc(100% - 66px);
`

export const LoaderContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 15rem;
  padding: 2rem 0 0;
  background-color: black;
  opacity: 0.3;
`

export const LeftTopAnchor = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 74px;
  height: 74px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: ${colors.secondaryLight};
  padding: 0 6px 6px 0;
  border-top-left-radius: 100%;
  border: 1px solid ${colors.primary};
  z-index: 3;
`

export const IconWrapper = styled.div`
  cursor: pointer;
  transition: transform 0.2s ease;
  display: flex;

  :hover {
    transform: scale(1.03);
  }
`

export const PaginationContainer = styled.div`
  height: 66px;
  display: flex;
  justify-content: center;
  background-color: ${colors.secondaryLight};
  border: 1px solid ${colors.primary};
  border-top: none;
`

export const NoDataWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`
