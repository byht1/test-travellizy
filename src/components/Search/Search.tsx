import React, { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HeaderBox, Input, Warning } from './Search.styled';

const KEY_SEARCH = 'search';

type Props = {
  params(): {
    [key: string]: string;
  };
};

export const Search: FC<Props> = ({ params: par }) => {
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

  return (
    <HeaderBox>
      <Input
        onChange={event => eventSearch(event)}
        type="text"
        name="search"
        value={searchValue}
        placeholder="Монітор ASUS"
      />
      <Warning>Ці данні не несуть ніякох цінності</Warning>
    </HeaderBox>
  );
};
