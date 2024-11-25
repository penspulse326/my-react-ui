import { StyledSwitch, Thumb } from './styled';

interface SwitchProps {
  isChecked: boolean;
  onClick: () => void;
}

/**
 * 這就是一個 Switch 開關，不然你要怎樣
 */
export function Switch({ isChecked, onClick }: SwitchProps) {
  return (
    <StyledSwitch $isChecked={isChecked} onClick={onClick}>
      <Thumb $isChecked={isChecked} />
    </StyledSwitch>
  );
}
