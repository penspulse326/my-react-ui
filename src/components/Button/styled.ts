import styled, { css } from 'styled-components';

interface Props {
  $variant?: 'contained' | 'outlined' | 'text';
  $themeColor?: string;
}

/**
 * variants
 */
const containedStyle = css<Props>`
  background-color: ${({ $themeColor }) => $themeColor};
`;

const outlinedStyle = css<Props>`
  border: 1px solid ${({ $themeColor }) => $themeColor};

  background-color: transparent;
`;

const textStyle = css<Props>`
  border: 2px solid transparent;
  border-radius: 0;

  background-color: transparent;

  &:hover {
    border-bottom: 2px solid ${({ $themeColor }) => $themeColor};
  }
`;

const variants = {
  contained: containedStyle,
  outlined: outlinedStyle,
  text: textStyle,
};

/**
 * disable style
 */
const disabledStyle = css<Props>`
  cursor: not-allowed;

  &:hover,
  &:active {
    opacity: 1;
  }
`;

/**
 * basic button style
 */
export const StyledButton = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
  min-width: 80px;
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
  ${({ $variant }) => variants[$variant!]}

  // disabled style
  ${({ disabled }) => disabled && disabledStyle}
`;

/** loader */
export const Loader = styled.div<Props>`
  width: 16px;
  height: 16px;
  border: 2px solid
    ${({ $variant, $themeColor }) => ($variant === 'contained' ? '#fff' : $themeColor)};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
