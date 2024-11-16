import { StyledButton } from './styled';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
}

export function Button({ children, variant = 'contained', ...props }: ButtonProps) {
  return (
    <StyledButton $variant={variant} {...props}>
      <span>{children}</span>
    </StyledButton>
  );
}
