import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TParams } from '../type/params';

export const useFilterName = (name: string, value: string, params: TParams) => {
  const [position, setPosition] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const paramsName = searchParams.get(name) ?? '';
    if (paramsName) {
      const nameParams = paramsName.split(',');

      if (nameParams.includes(value)) {
        setPosition(true);
        return;
      }
    }
    setPosition(false);
  }, [searchParams]);

  const filterable = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = e.target;
    const name = t.name;
    const value = t.value.toString();
    const checked = t.checked;

    const newParams = params();

    let nextParams: { name: string } | {} = newParams;

    if (newParams[name]) {
      const cancellation = newParams[name]
        .split(',')
        .filter(x => x !== value)
        .join(',');
      nextParams = checked
        ? { ...newParams, [name]: `${newParams[name]},${value}` }
        : { ...newParams, [name]: cancellation };
    } else {
      nextParams = checked ? { ...newParams, [name]: value } : {};
    }

    setSearchParams(nextParams);

    setPosition(prev => !prev);
  };

  return { filterable, position };
};
