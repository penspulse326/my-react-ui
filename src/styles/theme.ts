// reference daisyUI retro: https://daisyui.com/docs/themes/
export const theme = {
  colors: {
    primary: '#ef9995',
    secondary: '#a4cbb4',
    accent: '#dc8850',
    neutral: '#2e282a',

    info: '#2563eb',
    success: '#16a34a',
    warning: '#d97706',
    error: '#f35248',

    text: {
      default: '#2e282a',
      light: '#ede6d4',
      disabled: '#9ca3af',
    },

    bg: {
      default: '#ece3d3',
      paper: '#e4d8b4',
      muted: '#dbca9a',
    },

    border: '#d8c8b0',
  },

  spacing: (rate: number) => `${4 * rate}px`,
};
