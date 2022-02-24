import {PostOffer} from './../models/post-offer.models';
import {axios} from '../utils';
import {mapAxiosError} from '../utils/mappedError';

export const postOffer = async (props: PostOffer) => {
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
