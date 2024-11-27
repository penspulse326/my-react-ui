import { useColor } from '../../hooks/useColor';
import { StyledSwitch, Thumb } from './styled';

interface SwitchProps {
  isChecked: boolean;
  themeColor?: string;
  onClick: () => void;
}

/**
 * 這就是一個 Switch 開關，不然你要怎樣
 */
export function Switch({ isChecked, themeColor = 'primary', onClick }: SwitchProps) {
  const { getColor } = useColor();
  const switchColor = getColor(themeColor, !isChecked);

  return (
    <StyledSwitch $isChecked={isChecked} $themeColor={switchColor} onClick={onClick}>
      <Thumb $isChecked={isChecked} />
    </StyledSwitch>
  );
}
