import { useColor } from '../../hooks/useColor';
import { Loader, StyledButton } from './styled';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  themeColor?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export function Button({
  children,
  variant = 'contained',
  themeColor = 'primary',
  isDisabled = false,
  isLoading = false,
  ...props
}: ButtonProps) {
  const { getColor } = useColor();
  const btnColor = getColor(themeColor, isDisabled || isLoading);

  return (
    <StyledButton
      $variant={variant}
      $themeColor={btnColor}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {isLoading && <Loader $variant={variant} />}

      <span>{children}</span>
    </StyledButton>
  );
}
