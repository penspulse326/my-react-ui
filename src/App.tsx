import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Button from "./components/Button";

function App() {
  <ThemeProvider theme={theme.default}>
    <h2>Button</h2>
    <Button $variant={"outlined"} isDisabled={false} themeColor={"primary"}>
      我是按鈕
    </Button>
    <Button $variant={"contained"} themeColor="error">
      我是按鈕
    </Button>
    <Button $variant={"text"} themeColor="secondary">
      我是按鈕
    </Button>
  </ThemeProvider>;
}

export default App;
