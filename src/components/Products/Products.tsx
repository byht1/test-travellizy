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
            <img src={photo} alt={'Монитор: ' + brand} />
            <Box p={4}>
              <Text>
                Монитор: {brand}, {screen_extension}
              </Text>
              <Text>Цена: {prise}</Text>
              <Button>Купить</Button>
            </Box>
          </Elements>
        );
      })}
    </ListProducts>
  );
};
