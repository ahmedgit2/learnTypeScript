import {axios} from '../utils';
import {mapAxiosError} from '../utils/mappedError';

export const getProviderSpecificBids = async ({
  page = 1,
  lat = 30.5965,
  lng = 32.2715,
  orderType,
}) => {
  try {
    const providerPids = await axios.get(
      `order-bids/eligible-bids?page=${page}&limit=20&lat=${lat}&lng=${lng}&orderType=${orderType}}`,
    );
    return providerPids.data;
  } catch (error) {
    throw mapAxiosError(error);
  }
};
