import styled from "styled-components";

const Btn = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.primary};

  // hover 效果使用 opacity
  &:hover {
    opacity: 0.8;
  }

  // disabled 效果
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/** Primary UI component for user interaction */
export const Button = () => {
  return <Btn>按鈕</Btn>;
};
