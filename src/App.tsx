import styled, { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

// Button component example
const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.primary};

  // hover 效果使用 opacity
  &:hover {
    opacity: 0.8;
  }

  // disabled 效果
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Card component example
const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button>123</Button>
        <Card>123</Card>
      </ThemeProvider>
    </div>
  );
}

export default App;
