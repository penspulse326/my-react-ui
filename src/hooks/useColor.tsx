import { useTheme } from "styled-components";

export const useColor = () => {
  const theme = useTheme();

  const makeColor = ({ themeColor, isDisabled }: MakeColorType) => {
    const madeColor = theme.color[themeColor] || themeColor;
    return isDisabled ? theme.color.disable : madeColor;
  };

  return {
    makeColor,
  };
};

type MakeColorType = {
  themeColor: string;
  isDisabled: boolean;
};

export default { useColor };
