import React, { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

type Props = {
  prise: {
    min: number;
    max: number;
  };
  value: string;
  name: string;
  children: string;
  params(): {
    [key: string]: string;
  };
};

export const InputFilter: FC<Props> = ({
  prise,
  children,
  value,
  name,
  params,
}) => {
  const [valuePriseFilter, setValuePriseFilter] = useState(value);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setValuePriseFilter(value);
    const newParams = params();

    // if (name === 'min') {
    //   delete newParams['min'];
    // }

    // if (name === 'max') {
    //   delete newParams['max'];
    // }
    delete newParams['min'];
    delete newParams['max'];
    setSearchParams(newParams);
  }, [value]);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = e.target;
    const name = t.name;
    const value = t.value;

    par(name, value);
    setValuePriseFilter(value);
  };

  function par(name: string, value: string) {
    const newParams = params();

    let nextParams: { name: string } | {} = newParams;

    if (newParams[name]) {
      nextParams = { ...newParams, [name]: value };
    } else {
      nextParams = value ? { ...newParams, [name]: value } : {};
    }

    setSearchParams(nextParams, { replace: true });
  }

  return (
    <label>
      <span>{children}</span>
      <input
        onChange={e => change(e)}
        type="number"
        name={name}
        value={valuePriseFilter}
        min={prise.min}
        max={prise.max}
        step={10}
      />
    </label>
  );
};
