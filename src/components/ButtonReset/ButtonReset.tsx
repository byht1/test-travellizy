import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from './ButtonReset.styled';

type Props = {};

export const ButtonReset = (props: Props) => {
  const [_, setSearchParams] = useSearchParams();

  return <Button onClick={() => setSearchParams({})}>Скинути</Button>;
};
