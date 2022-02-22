import {axios} from '../utils';
import {mapAxiosError} from '../utils/mappedError';

export const getProviderIssue = async () => {
  try {
    const provider = await axios.get('providers/my-issues?page=1&limit=20');

    return provider.data;
  } catch (error) {
    throw mapAxiosError(error);
  }
};
