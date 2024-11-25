import styled from 'styled-components';

interface Props {
  $isChecked: boolean;
}

export const StyledSwitch = styled.button<Props>`
  position: relative;

  display: flex;
  align-items: center;

  width: 48px;
  height: 24px;

  border: none;
  border-radius: 12px;
  outline: none;

  background-color: black;

  cursor: pointer;
`;

export const Thumb = styled.div<Props>`
  position: absolute;
  left: ${({ $isChecked }) => ($isChecked ? 'calc(100% - 24px)' : '4px')};

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
`;
