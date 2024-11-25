import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Switch } from './components/Switch';
import { useState } from 'react';

// Card component example
// const Card = styled.div`
//   background-color: ${({ theme }) => theme.colors.bg.paper};
//   border: 1px solid ${({ theme }) => theme.colors.border};
// `;

function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Switch isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
      </ThemeProvider>
    </div>
  );
}

export default App;
