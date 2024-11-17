import { useTheme } from 'styled-components';

const checkIsColor = (color: string): boolean => {
  const regex = /(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^)]*\)/gi;
  return regex.test(color);
};

export const useColor = () => {
  const theme = useTheme();

  const getColor = (themeColor: string, isMuted: boolean) => {
    if (isMuted) {
      return theme.colors.text.light;
    }

    if (theme.colors) {
      return theme.colors[themeColor];
    }

    const isLegalColor = checkIsColor(themeColor);

    if (isLegalColor) {
      return themeColor;
    }

    return theme.colors.primary;
  };

  return { getColor };
};
