import { useColor } from '../../hooks/useColor';
import { StyledButton, Icon, LoadingAnimation } from './styled';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  themeColor?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Button({
  children,
  variant = 'contained',
  themeColor = 'primary',
  isDisabled = false,
  isLoading = false,
  startIcon,
  endIcon,
  className,
  style,
  ...props
}: ButtonProps) {
  const { getColor } = useColor();
  const btnColor = getColor(themeColor, isDisabled || isLoading);

  return (
    <StyledButton
      $variant={variant}
      $themeColor={btnColor}
      disabled={isDisabled || isLoading}
      className={className}
      style={style}
      {...props}
    >
      {isLoading ? (
        <LoadingAnimation $variant={variant} $themeColor={btnColor} />
      ) : (
        <>
          <Icon>{startIcon}</Icon>
          <span>{children}</span>
          <Icon>{endIcon}</Icon>
        </>
      )}
    </StyledButton>
  );
}
