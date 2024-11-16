import { ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { theme } from "../src/styles/theme";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
  }),
];

export default preview;
