import React, { FC } from 'react';
import { Product } from '../../type/typeData';
import { Button, Elements, ListProducts, Text } from './Products.styled';
import { Box } from './../Box/Box';

type Props = {
  data: Product[];
};

export const Products: FC<Props> = ({ data }) => {
  return (
    <ListProducts>
      {data.map(({ id, brand, photo, screen_extension, prise }) => {
        return (
          <Elements key={id}>
            <img src={photo} alt={'Монітор: ' + brand} />
            <Box p={4}>
              <Text>
                Монітор: {brand}, {screen_extension}
              </Text>
              <Text>Ціна: {prise}</Text>
              <Button>Купити</Button>
            </Box>
          </Elements>
        );
      })}
    </ListProducts>
  );
};
