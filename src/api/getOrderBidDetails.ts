import {axios} from '../utils';
import {mapAxiosError} from '../utils/mappedError';
interface Props {
  id: number;
}

export const getOrderBidDetails = async (props: Props) => {
  try {
    const OrderBidDetails = await axios.get(`order-bids/${props.id}`);
    return OrderBidDetails.data;
  } catch (error) {
    throw mapAxiosError(error);
  }
};
