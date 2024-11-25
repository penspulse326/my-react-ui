import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Button } from './components/Button';
import iconGear from './assets/icon-gear.svg';

// Card component example
// const Card = styled.div`
//   background-color: ${({ theme }) => theme.colors.bg.paper};
//   border: 1px solid ${({ theme }) => theme.colors.border};
// `;

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          isDisabled
          isLoading
          startIcon={<img src={iconGear} alt="icon" />}
          endIcon={<img src={iconGear} alt="icon" />}
        >
          哈囉
        </Button>
        <Button variant="outlined">哈囉</Button>
        <Button variant="text">哈囉</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
