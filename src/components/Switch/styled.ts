import styled from 'styled-components';

interface Props {
  $isChecked: boolean;
  $themeColor?: string;
}

export const StyledSwitch = styled.button<Props>`
  position: relative;

  display: flex;
  align-items: center;

  padding: 2px;
  width: 40px;
  height: 24px;

  border: none;
  border-radius: 12px;
  outline: none;

  background-color: ${({ $themeColor }) => $themeColor};

  cursor: pointer;
`;

export const Thumb = styled.div<Props>`
  position: absolute;
  left: ${({ $isChecked }) => ($isChecked ? '18px' : '2px')};

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;

  transition: transform 0.2s ease-in-out;
`;
