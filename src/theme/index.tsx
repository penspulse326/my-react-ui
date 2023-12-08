const defaultTheme: ThemeType = {
  color: {
    primary: "#4281A4",
    secondary: "#48A9A6",
    disable: "#E4DFDA ",
    error: "#C1666B",
  },
};

export const theme = {
  default: defaultTheme,
};

export type ThemeType = {
  color: {
    primary: string;
    secondary: string;
    disable: string;
    error: string;
  };
};

export default { theme };
