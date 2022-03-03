import {axios} from '../utils';
import {mapAxiosError} from '../utils/mappedError';

export const getProviderSpecificBids = async ({
  page = 1,
  lat = 30.5965,
  lng = 32.2715,
  orderType = 'SPECIFIC',
}) => {
  try {
    const providerBids = await axios.get(
      `order-bids/eligible-bids?page=${page}&limit=20&lat=${lat}&lng=${lng}&orderType=${orderType}}`,
    );

    return providerBids.data;
  } catch (error) {
    throw mapAxiosError(error);
  }
};
