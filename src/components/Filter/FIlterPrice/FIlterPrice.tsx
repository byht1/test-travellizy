import React, { FC, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { InputFilter } from './InputFilter/InputFilter';

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
    <div>
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
    </div>
  );
};
