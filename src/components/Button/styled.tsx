import styled, { css } from "styled-components";
import { BtnPropsType, StyledPropsType } from "./types";

const containedStyle = css<StyledPropsType>`
  background: ${(props) => props.$btnColor};
  color: #fff;
`;

const outlinedStyle = css<StyledPropsType>`
  background: #fff;
  color: ${(props) => props.$btnColor};
  border: 1px solid ${(props) => props.$btnColor};
  &:hover {
    background: ${(props) => `${props.$btnColor}10`};
  }
`;

const textStyle = css<StyledPropsType>`
  background: #fff;
  color: ${(props) => props.$btnColor};
  &:hover {
    background: ${(props) => `${props.$btnColor}10`};
  }
`;

const variantMap = {
  contained: containedStyle,
  outlined: outlinedStyle,
  text: textStyle,
};

const StyledButton = styled.button<BtnPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 8px 16px;
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

  // optional styles
  ${(props) => variantMap[props.$variant] || variantMap.contained}
`;

export default StyledButton;
