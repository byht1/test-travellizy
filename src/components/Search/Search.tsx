import React, { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HeaderBox, Input } from './Search.styled';

const KEY_SEARCH = 'search';

export const Search: FC = () => {
  const [searchValue, setSearchValue] = useState(
    window.localStorage.getItem(KEY_SEARCH) ?? ''
  );
  const [_, setSearchParams] = useSearchParams('');

  useEffect(() => {
    if (searchValue) {
      params(searchValue);
    }

    window.addEventListener('keydown', event => clickEnter(event));

    return () => {
      window.removeEventListener('keydown', event => clickEnter(event));
    };
  }, [searchValue]);

  const eventSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchValue(value);

    params(value);
  };

  function params(v: string) {
    const nextParams: string | {} = v !== '' ? { search: v } : {};

    setSearchParams(nextParams);

    return nextParams;
  }

  function clickEnter(e: KeyboardEvent) {
    if (e.key !== 'Enter') {
      return;
    }

    if (searchValue.length < 3) {
      return;
    }
    window.localStorage.setItem(KEY_SEARCH, searchValue);
  }

  return (
    <HeaderBox>
      <Input
        onChange={event => eventSearch(event)}
        type="text"
        name="search"
        value={searchValue}
      />
    </HeaderBox>
  );
};
