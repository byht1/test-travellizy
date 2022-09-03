import React, { FC } from 'react';
import { FilterName } from '../FilterName/FilterName';
import { Box } from './../../Box/Box';
import { FilterTitle } from './FilterBox.styled';

type Props = {
  data: string[] | boolean[];
  name: string;
  children: string;
  params(): {
    [key: string]: string;
  };
};

export const FilterBox: FC<Props> = ({ name, data, children, params }) => {
  return (
    <Box color="textWhite" mt={5}>
      <FilterTitle>{children}</FilterTitle>
      <Box mt={4} display="flex" flexDirection="column" gridGap={4}>
        {data.map((x, i) => {
          if (typeof x === 'boolean') {
            if (x) {
              x = 'В наявності';
            } else {
              x = 'Відсутні';
            }
          }
          return (
            <FilterName params={params} name={name} value={x} key={name + i} />
          );
        })}
      </Box>
    </Box>
  );
};
