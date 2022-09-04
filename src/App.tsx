import { useState, useEffect, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { Box } from './components/Box/Box';
import { Filter } from './components/Filter/Filter';
import { Products } from './components/Products/Products';
import { Search } from './components/Search/Search';
import jsonData from './json/data.json';
import { theme } from './theme/theme';
import { Filters, Product, ServerData } from './type/typeData';
import { useSearchParams } from 'react-router-dom';

const stateFilter = {
  brand: [],
  diagonal: [],
  refresh_rate: [],
  screen_extension: [],
  matrix_type: [],
  relation_parties: [],
  built_speaker: [],
  prise: {
    min: 10000000000000000,
    max: 0,
  },
};

function App() {
  const [data] = useState(jsonData);
  const [renderData, setRenderData] = useState<Product[]>([]);
  const [filterName, setFilterName] = useState<Filters>(stateFilter);
  const [searchParams] = useSearchParams();
  const filterMemo = useMemo(() => {
    const newParams = params();

    let filter: ServerData[] = data;

    if (newParams) {
      if (newParams.search) {
        filter = filter.filter(x =>
          x.brand.toLowerCase().includes(newParams.search.toLowerCase())
        );
      }
      if (newParams.brand) {
        const brandFilter = newParams.brand.split(',');
        filter = filter.filter(({ brand }) => brandFilter.includes(brand));
      }
      if (newParams.diagonal) {
        const diagonalFilter = newParams.diagonal.split(',');
        filter = filter.filter(({ diagonal }) =>
          diagonalFilter.includes(diagonal)
        );
      }
      if (newParams.refreshRate) {
        const refreshRateFilter = newParams.refreshRate.split(',');
        filter = filter.filter(({ refresh_rate }) =>
          refreshRateFilter.includes(refresh_rate)
        );
      }
      if (newParams.screenExtension) {
        const screenExtensionFilter = newParams.screenExtension.split(',');
        filter = filter.filter(({ screen_extension }) =>
          screenExtensionFilter.includes(screen_extension)
        );
      }
      if (newParams.matrixType) {
        const matrixTypeFilter = newParams.matrixType.split(',');
        filter = filter.filter(({ matrix_type }) =>
          matrixTypeFilter.includes(matrix_type)
        );
      }
      if (newParams.relationParties) {
        const relationPartiesFilter = newParams.relationParties.split(',');
        filter = filter.filter(({ relation_parties }) =>
          relationPartiesFilter.includes(relation_parties)
        );
      }
      if (newParams.builtSpeaker) {
        const builtSpeakerFilter = newParams.builtSpeaker;
        filter = filter.filter(({ built_speaker }) => {
          if (builtSpeakerFilter === 'В наявності' && built_speaker) {
            return built_speaker;
          }

          if (builtSpeakerFilter === 'Відсутні' && !built_speaker) {
            return !built_speaker;
          }
        });
      }

      const prise = () => {
        if (newParams.min || newParams.max) {
          const minFilter = Number(newParams.min);
          const maxFilter = Number(newParams.max);
          if (newParams.min && newParams.max) {
            filter = filter.filter(
              ({ prise }) => prise >= minFilter && prise <= maxFilter
            );
            return;
          }

          if (newParams.min) {
            filter = filter.filter(({ prise }) => prise >= minFilter);
            return;
          } else {
            filter = filter.filter(({ prise }) => prise <= maxFilter);
            return;
          }
        }
      };

      prise();
    }
    const products: any = filter.map(x => {
      return Object.fromEntries(
        Object.entries(x).filter(([key]) =>
          ['id', 'brand', 'photo', 'prise', 'screen_extension'].includes(key)
        )
      );
    });

    return products;
  }, [searchParams]);

  useEffect(() => {
    setRenderData(filterMemo);
  }, [filterMemo]);

  useEffect(() => {
    const filter = data.reduce(
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

        if (x.prise < acc.prise.min) {
          acc.prise.min = x.prise;
        }

        if (x.prise > acc.prise.max) {
          acc.prise.max = x.prise;
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
        prise: {
          min: 10000000000000000,
          max: 0,
        },
      } as Filters
    );

    filter.diagonal.sort((a, b) => Number(a) - Number(b));
    filter.refresh_rate.sort((a, b) => Number(a) - Number(b));
    filter.screen_extension.sort(
      (a, b) => Number(a.slice(0, 4)) - Number(b.slice(0, 4))
    );
    filter.relation_parties.sort(
      (a, b) => Number(a.slice(0, 2)) - Number(b.slice(0, 2))
    );

    setFilterName(filter);
  }, []);

  function params(): {
    [key: string]: string;
  } {
    const newParams: { [key: string]: string } = {};
    searchParams.forEach((value: string, key: string) => {
      newParams[key] = value;
    });

    return newParams;
  }

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
