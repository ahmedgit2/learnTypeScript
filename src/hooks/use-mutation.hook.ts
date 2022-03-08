import {PostOffer} from './../models/post-offer.models';
import {UseMutationOptions, useMutation, MutationFunction} from 'react-query';
import {postOffer} from '../api';
import {axios, mapAxiosError} from '../utils';

interface Props<T> {
  dependKey?: string;
  option?: UseMutationOptions<T, Error, T>;
  api: MutationFunction<T, T>;
}

export const useMutationHook = <T>(props: Props<T>) => {
  const {option, api, dependKey} = props;

  const {data, error, mutate, ...rest} = useMutation(
    [dependKey],
    variables => api(variables),
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
