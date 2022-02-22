import {useState} from 'react';
import {postOffer} from '../api';

interface Props {
  orderBidId: number;
  transportationPrice: number;
  providerVehicle: number;
  notes: string;
}

export const usePostOffer = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>('');

  const post = async () => {
    try {
      setLoading(true);
      const res = await postOffer(props);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    post,
    loading,
    error,
  };
};
