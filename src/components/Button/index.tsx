import { useColor } from '../../hooks/useColor';
import { StyledButton } from './styled';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
}

export function Button({ children, variant = 'contained', ...props }: ButtonProps) {
  const { getColor } = useColor();
  const color = getColor('primary', true);

  return (
    <StyledButton $variant={variant} $color={color} {...props}>
      <span>{children}</span>
    </StyledButton>
  );
}
