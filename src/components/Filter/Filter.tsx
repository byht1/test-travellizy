import React, { FC } from 'react';
import { Filters } from '../../type/typeData';
import { AsideBox } from './Filter.styled';

type Props = {
  params: Filters | null;
};

export const Filter: FC<Props> = ({ params }) => {
  return <AsideBox>Filters</AsideBox>;
};
