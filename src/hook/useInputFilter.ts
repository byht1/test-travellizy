import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TParams } from '../type/params';

export const useInputFilter = (value: string, params: TParams) => {
  const [valuePriseFilter, setValuePriseFilter] = useState(value);
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    setValuePriseFilter(value);
    const newParams = params();

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

  return { change, valuePriseFilter };
};
