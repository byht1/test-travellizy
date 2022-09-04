import React, { FC, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterTitle } from './FIlterPrice.styled';
import { InputFilter } from './InputFilter/InputFilter';
import { Box } from './../../Box/Box';

type Props = {
  prise: {
    min: number;
    max: number;
  };
  params(): {
    [key: string]: string;
  };
};

export const FIlterPrice: FC<Props> = ({ prise, params }) => {
  return (
    <Box color="#fff">
      <FilterTitle>По ціні</FilterTitle>
      <Box
        mt={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gridGap={3}
      >
        <InputFilter
          params={params}
          value={prise.min.toString()}
          name="min"
          prise={prise}
        >
          Від
        </InputFilter>
        <InputFilter
          params={params}
          value={prise.max.toString()}
          name="max"
          prise={prise}
        >
          До
        </InputFilter>
      </Box>
    </Box>
  );
};
