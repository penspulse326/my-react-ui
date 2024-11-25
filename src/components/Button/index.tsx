import { useColor } from '../../hooks/useColor';
import { StyledButton, Icon, LoadingAnimation } from './styled';

interface ButtonProps {
  /**
   * 按鈕文字
   */
  children?: React.ReactNode;

  /**
   * 按鈕樣式
   */
  variant?: 'contained' | 'outlined' | 'text';

  /**
   * 按鈕顏色
   * 可以是色碼或是主題色關鍵字
   */
  themeColor?: string;

  /**
   * 是否禁用
   */
  isDisabled?: boolean;

  /**
   * 是否讀取中
   */
  isLoading?: boolean;

  /**
   * 按鈕左側圖示
   */
  startIcon?: React.ReactNode;

  /**
   * 按鈕右側圖示
   */
  endIcon?: React.ReactNode;

  /**
   * className
   */
  className?: string;

  /**
   * inline style
   */
  style?: React.CSSProperties;

  /**
   * 點擊事件
   */
  onClick?: () => void;
}

/**
 * 這是一個按鈕元件，不然你想怎樣
 */
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
