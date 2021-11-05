import styled from '@emotion/styled'
import { colors } from 'config/themes'

export const StyledButton = styled.button`
  position: relative;
  padding: 0.375rem 1rem;
  text-decoration: none;
  text-align: center;
  line-height: 1.5rem;
  outline: none;
  white-space: nowrap;
  font-family: Gilroy-ExtraBold, sans-serif;
  font-size: 1rem;
  border: 2px solid ${colors.third};
  border-radius: 15px;
  background: ${({ inverted }) => (inverted ? 'transparent' : colors.third)};
  color: ${({ inverted }) => (inverted ? colors.third : colors.primary)};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    &:hover {
      transform: none;
    }
  }
`
