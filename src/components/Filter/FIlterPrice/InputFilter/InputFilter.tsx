import { FC } from 'react';
import { Input, Label } from './InputFilter.styled';
import { useInputFilter } from './../../../../hook/useInputFilter';

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
  const { change, valuePriseFilter } = useInputFilter(value, params);

  return (
    <Label>
      <span>{children}</span>
      <Input
        onChange={e => change(e)}
        type="number"
        name={name}
        value={valuePriseFilter}
        min={prise.min}
        max={prise.max}
        step={10}
      />
    </Label>
  );
};
