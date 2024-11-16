import styled, { css } from 'styled-components';

interface Props {
  $variant?: 'contained' | 'outlined' | 'text';
  $color?: string;
}

/**
 * variants
 */
const containedStyle = css<Props>`
  background-color: ${({ $color }) => $color};
`;

const outlinedStyle = css<Props>`
  border: 1px solid ${({ $color }) => $color};

  background-color: transparent;
`;

const textStyle = css<Props>`
  border: 1px solid transparent;
  border-radius: 0;

  background-color: transparent;

  &:hover {
    border-bottom: 1px solid ${({ $color }) => $color};
  }
`;

const variants = {
  contained: containedStyle,
  outlined: outlinedStyle,
  text: textStyle,
};

/**
 * basic button style
 */
export const StyledButton = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  min-width: 36px;
  height: 36px;
  border: 1px solid transparent;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;

  cursor: pointer;

  transition: color 0.2s, background-color 0.2s, border 0.2s, opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.7;
  }

  // variants
  ${({ $variant }) => variants[$variant || 'contained']}
`;
