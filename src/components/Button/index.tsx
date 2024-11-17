import { useColor } from '../../hooks/useColor';
import { StyledButton } from './styled';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  isDisabled?: boolean;
}

export function Button({ children, variant = 'contained', isDisabled = false, ...props }: ButtonProps) {
  const { getColor } = useColor();
  const color = getColor('primary', isDisabled);

  return (
    <StyledButton $variant={variant} $color={color} disabled={isDisabled} {...props}>
      <span>{children}</span>
    </StyledButton>
  );
}
