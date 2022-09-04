import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TParams } from '../type/params';

export const useSearch = (par: TParams) => {
  const [searchValue, setSearchValue] = useState('');
  const [_, setSearchParams] = useSearchParams('');

  useEffect(() => {
    if (searchValue) {
      params(searchValue);
    }
  }, [searchValue]);

  const eventSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchValue(value);

    params(value);
  };

  function params(v: string) {
    const newParams = par();
    let nextParams: { name: string } | {} = {};

    if (newParams['search']) {
      nextParams = v !== '' ? { ...newParams, search: v } : {};
    } else {
      nextParams = v !== '' ? { search: v } : {};
    }

    setSearchParams(nextParams);

    return nextParams;
  }

  return { eventSearch, searchValue };
};
