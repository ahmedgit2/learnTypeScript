import {axios, mapAxiosError} from '../utils';

export const fetcher = async <T>(url: string) => {
  try {
    const res = await axios.get<T>(url);
    return res.data;
  } catch (error) {
    throw mapAxiosError(error);
  }
};
