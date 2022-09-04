import { FC } from 'react';
import { HeaderBox, Input, Warning } from './Search.styled';
import { useSearch } from './../../hook/useSearch';
import { ButtonReset } from '../ButtonReset/ButtonReset';

const KEY_SEARCH = 'search';

type Props = {
  params(): {
    [key: string]: string;
  };
};

export const Search: FC<Props> = ({ params: par }) => {
  const { eventSearch, searchValue } = useSearch(par);
  return (
    <HeaderBox>
      <ButtonReset />
      <Input
        onChange={event => eventSearch(event)}
        type="text"
        name="search"
        value={searchValue}
        placeholder="ASUS"
      />
      <Warning>Ці данні не несуть ніякох цінності</Warning>
    </HeaderBox>
  );
};
