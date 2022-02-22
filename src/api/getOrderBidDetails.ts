import {axios} from '../utils';
import {mapAxiosError} from '../utils/mappedError';

export const getOrderBidDetails = async (orderBidId: number) => {
  try {
    const OrderBidDetails = await axios.get(`order-bids/${orderBidId}`);

    return OrderBidDetails.data;
  } catch (error) {
    throw mapAxiosError(error);
  }
};
