import { FC } from 'react';
import { Label, Text } from './FilterName.styled';
import { useFilterName } from './../../../hook/useFilterName';

type Props = {
  name: string;
  value: string;
  params(): {
    [key: string]: string;
  };
};

export const FilterName: FC<Props> = ({ name, value, params }) => {
  const { filterable, position } = useFilterName(name, value, params);
  return (
    <Label>
      <input
        onChange={filterable}
        type="checkbox"
        name={name}
        value={value}
        checked={position}
      />
      <Text>{value}</Text>
    </Label>
  );
};
