import React, { useState, useEffect } from 'react'
import TriangularArrow from '../TriangularArrow.svg'
import { useMediaQuery } from './useMediaQuery'
import {
  Container,
  LeftArrowWrapper,
  RightArrowWrapper,
  StyledPaginationButton,
} from './styles'

const breakpoints = {
  mobile: 600,
  tablet: 768,
  regular: 1024,
  large: 1800,
}

interface PaginationProps {
  countPages: number | null
  selectedPage: number
  selectPage: (i: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  countPages,
  selectedPage,
  selectPage,
}) => {
  const [pages, setPages] = useState<number[]>([])

  useEffect(() => {
    if (countPages) {
      const buf = []
      for (let i = 0; i < countPages; i++) {
        buf.push(i)
      }
      setPages(buf)
    }
  }, [countPages])

  const { regular, tablet } = breakpoints
  const regularBreakpoint = useMediaQuery(regular)
  const tabletBreakpoint = useMediaQuery(tablet)

  const val = regularBreakpoint ? 5 : tabletBreakpoint ? 4 : 2

  const isFirst = selectedPage < val
  const isLast = selectedPage > pages.length - 1 - val
  const isCountPagesLessVal = pages.length <= val * 2

  const visibleButtons = isCountPagesLessVal
    ? pages
    : isFirst
    ? pages.slice(0, val * 2)
    : isLast
    ? pages.slice(pages.length - val * 2, pages.length)
    : pages.slice(selectedPage - val + 1, selectedPage + val)

  return (
    <Container>
      {!isFirst && !isCountPagesLessVal && (
        <LeftArrowWrapper onClick={() => selectPage(0)}>
          <img src={TriangularArrow} alt="" />
        </LeftArrowWrapper>
      )}
      {visibleButtons?.map((item: number) => (
        <StyledPaginationButton
          onClick={() => selectPage(item)}
          backgroundColor={item !== selectedPage ? 'transparent' : 'primary'}
          color={item !== selectedPage ? 'primary' : 'white'}
          key={item}
        >
          {item + 1}
        </StyledPaginationButton>
      ))}
      {!isLast && !isCountPagesLessVal && (
        <RightArrowWrapper onClick={() => selectPage(pages.length - 1)}>
          <img src={TriangularArrow} alt="" />
        </RightArrowWrapper>
      )}
    </Container>
  )
}

export default Pagination
