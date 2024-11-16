// reference daisyUI retro: https://daisyui.com/docs/themes/
export const theme = {
  colors: {
    primary: "#ef9995",
    secondary: "#a4cbb4",
    accent: "#e9b84e",
    neutral: "#2e282a",

    success: "#91c4a8",
    warning: "#e9b84e",
    error: "#ef9995",

    text: {
      primary: "#2e282a",
      secondary: "#635956",
      disabled: "#9ca3af",
    },

    bg: {
      default: "#ece3d3",
      paper: "#e6d7c3",
      muted: "#d8c8b0",
    },

    border: "#d8c8b0",
  },

  spacing: (rate: number) => `${4 * rate}px`,
};
