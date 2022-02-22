import {axios} from '../utils';
import {mapAxiosError} from '../utils/mappedError';

interface Props {
  orderBidId: number;
  transportationPrice: number;
  providerVehicle: number;
  notes: string;
}

export const postOffer = async (props: Props) => {
  const {orderBidId, transportationPrice, providerVehicle, notes} = props;
  try {
    const res = await axios.post(`order-bids/${orderBidId}/offers`, {
      transportationPrice,
      providerVehicle,
      notes,
    });
    return res.data;
  } catch (error) {
    throw mapAxiosError(error);
  }
};
