import {UseMutationOptions, useMutation} from 'react-query';

interface Props<T> {
  dependKey?: string;
  option?: UseMutationOptions<T, Error, T>;
  api: (props: T) => any;
  payLoad: T;
}

export const useMutationHook = <T>(props: Props<T>) => {
  const {option, dependKey, api, payLoad} = props;

  const {data, error, mutate, ...rest} = useMutation<T, Error, T>(
    [dependKey],
    async () => {
      return await api(payLoad);
    },
    {
      ...option,
    },
  );

  return {
    mutate,
    error,
    data,
    ...rest,
  };
};
