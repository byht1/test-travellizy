import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HeaderBox, Input } from './Search.styled';

const KEY_SEARCH = 'search';

export const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.addEventListener('keydown', event => clickEnter(event));

    return () => {
      window.removeEventListener('keydown', event => clickEnter(event));
    };
  }, [searchValue]);

  const eventSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchValue(value);

    const nextParams: string | {} = value !== '' ? { search: value } : {};
    setSearchParams(nextParams);
  };

  function clickEnter(e: KeyboardEvent) {
    console.log('🚀 ~ searchValue.length', searchValue.length);
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
