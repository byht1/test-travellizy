import { ThemeProvider } from 'styled-components';
import { Box } from './components/Box/Box';
import { Filter } from './components/Filter/Filter';
import { Products } from './components/Products/Products';
import { Search } from './components/Search/Search';
import { theme } from './theme/theme';
import { useApp } from './hook/useApp';

function App() {
  const { params, filterName, renderData } = useApp();
  return (
    <ThemeProvider theme={theme}>
      <>
        <Search params={params} />
        <Box display="flex" justifyContent="space-between">
          <Filter params={params} data={filterName} />
          <Products data={renderData} />
        </Box>
      </>
    </ThemeProvider>
  );
}

export default App;
