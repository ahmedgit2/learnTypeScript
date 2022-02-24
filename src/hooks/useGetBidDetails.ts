import {useEffect, useRef, useState} from 'react';
import {getOrderBidDetails} from '../api';
import {BidsDetails} from '../models';

interface Props {
  id: number;
}

export const useGetBidDetails = (props: Props) => {
  const [data, setData] = useState<BidsDetails>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | any>();

  useEffect(() => {
    setLoading(true);
    getBidDetails();
  }, []);

  const getBidDetails = async () => {
    try {
      const BidDetails = await getOrderBidDetails(props);
      setData(BidDetails);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    data,
    error,
  };
};
