import React, { FC } from 'react';
import { Filters } from '../../type/typeData';
import { AsideBox } from './Filter.styled';
import { FilterBox } from './FilterBox/FilterBox';
import { FIlterPrice } from './FIlterPrice/FIlterPrice';

type Props = {
  data: Filters;
  params(): {
    [key: string]: string;
  };
};

export const Filter: FC<Props> = ({
  data: {
    brand,
    diagonal,
    refresh_rate: refreshRate,
    screen_extension: screenExtension,
    matrix_type: matrixType,
    relation_parties: relationParties,
    built_speaker: builtSpeaker,
    prise,
  },
  params,
}) => {
  return (
    <AsideBox>
      <FIlterPrice prise={prise} params={params} />
      <FilterBox params={params} name="brand" data={brand}>
        По бренду
      </FilterBox>
      <FilterBox params={params} name="diagonal" data={diagonal}>
        По діагоналі
      </FilterBox>
      <FilterBox params={params} name="refreshRate" data={refreshRate}>
        По частоті оновлень
      </FilterBox>
      <FilterBox params={params} name="screenExtension" data={screenExtension}>
        По розширенню
      </FilterBox>
      <FilterBox params={params} name="matrixType" data={matrixType}>
        По типу матриці
      </FilterBox>
      <FilterBox params={params} name="relationParties" data={relationParties}>
        По відношенню сторін
      </FilterBox>
      <FilterBox params={params} name="builtSpeaker" data={builtSpeaker}>
        Наявність колонок
      </FilterBox>
    </AsideBox>
  );
};
