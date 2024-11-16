import styled, { css } from "styled-components";

interface Props {
  $variant?: "contained" | "outlined" | "text";
}

/**
 * variants
 */
const containedStyle = css`
  background-color: aqua;
`;

const outlinedStyle = css`
  border: 1px solid red;
`;

const textStyle = css`
  background-color: transparent;
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

  min-width: 100px;
  height: 36px;
  border: none;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;

  cursor: pointer;

  transition: color 0.2s, background-color 0.2s, border 0.2s,
    opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.7;
  }

  // variants
  ${(props) => variants[props.$variant || "contained"]}
`;
