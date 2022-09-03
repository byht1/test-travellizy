import { useState, useEffect, FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Box } from './components/Box/Box';
import { Filter } from './components/Filter/Filter';
import { Products } from './components/Products/Products';
import { Search } from './components/Search/Search';
import jsonData from './json/data.json';
import { theme } from './theme/theme';
import { Filters, Product } from './type/typeData';

function App() {
  const [data, setData] = useState<Product[]>([]);
  const [filterName, setFilterName] = useState<Filters | null>(null);

  useEffect(() => {
    const filter = jsonData.reduce(
      (acc, x) => {
        const brandNew = acc.brand.includes(x.brand);
        const diagonalNew = acc.diagonal.includes(x.diagonal);
        const refreshRateNew = acc.refresh_rate.includes(x.refresh_rate);
        const screenExtensionNew = acc.screen_extension.includes(
          x.screen_extension
        );
        const matrixTypeNew = acc.matrix_type.includes(x.matrix_type);
        const relationPartiesNew = acc.relation_parties.includes(
          x.relation_parties
        );
        const builtSpeakerNew = acc.built_speaker.includes(x.built_speaker);

        if (!brandNew) {
          acc.brand.push(x.brand);
        }
        if (!diagonalNew) {
          acc.diagonal.push(x.diagonal);
        }
        if (!refreshRateNew) {
          acc.refresh_rate.push(x.refresh_rate);
        }
        if (!screenExtensionNew) {
          acc.screen_extension.push(x.screen_extension);
        }
        if (!matrixTypeNew) {
          acc.matrix_type.push(x.matrix_type);
        }
        if (!relationPartiesNew) {
          acc.relation_parties.push(x.relation_parties);
        }
        if (!builtSpeakerNew) {
          acc.built_speaker.push(x.built_speaker);
        }

        return acc;
      },
      {
        brand: [],
        diagonal: [],
        refresh_rate: [],
        screen_extension: [],
        matrix_type: [],
        relation_parties: [],
        built_speaker: [],
      } as Filters
    );
    setFilterName(filter);

    const products: any = jsonData.map(x => {
      return Object.fromEntries(
        Object.entries(x).filter(([key]) =>
          ['id', 'brand', 'photo', 'prise', 'screen_extension'].includes(key)
        )
      );
    });
    setData(products);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <Search />
        <Box display="flex" justifyContent="space-between">
          <Filter params={filterName} />
          <Products data={data} />
        </Box>
      </>
    </ThemeProvider>
  );
}

export default App;
