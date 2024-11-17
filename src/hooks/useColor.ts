import { useTheme } from 'styled-components';

/**
 * 檢查是否為色碼
 */
const checkIsColor = (color: string): boolean => {
  const regex = /(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^)]*\)/gi;
  return regex.test(color);
};

/**
 * useColor 會回傳 getColor 方法
 * getColor 傳入的 themeColor 及 isDisabled 狀態回傳色碼
 * 判斷的優先順序為：
 * 1. 是否為禁用狀態
 * 2. 是否為合法色碼
 * 3. 檢查是否為 theme.colors 的 key（不是則回傳 primary）
 */
export const useColor = () => {
  const theme = useTheme();

  const getColor = (themeColor: string, isMuted: boolean) => {
    if (isMuted) {
      return theme.colors.text.light;
    }

    const isLegalColor = checkIsColor(themeColor);

    if (isLegalColor) {
      return themeColor;
    }

    return theme.colors[themeColor] || theme.colors.primary;
  };

  return { getColor };
};
