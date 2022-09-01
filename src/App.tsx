import { ThemeProvider } from 'styled-components';
import { Search } from './components/Search/Search';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Search />
    </ThemeProvider>
  );
}

export default App;
