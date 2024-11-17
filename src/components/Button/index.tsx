import { useColor } from '../../hooks/useColor';
import { StyledButton } from './styled';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  themeColor?: string;
  isDisabled?: boolean;
}

export function Button({
  children,
  variant = 'contained',
  themeColor = 'primary',
  isDisabled = false,
  ...props
}: ButtonProps) {
  const { getColor } = useColor();
  const btnColor = getColor(themeColor, isDisabled);

  return (
    <StyledButton $variant={variant} $themeColor={btnColor} disabled={isDisabled} {...props}>
      <span>{children}</span>
    </StyledButton>
  );
}
