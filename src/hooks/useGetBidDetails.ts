import {useEffect, useRef, useState} from 'react';
import {getOrderBidDetails} from '../api';

export const useGetBidDetails = (id: number) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    setLoading(true);
    getBidDetails(id);
  }, []);

  const getBidDetails = async (id: number) => {
    try {
      const Bid = await getOrderBidDetails(id);
      setData(Bid);
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
