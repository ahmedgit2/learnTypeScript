import {useEffect, useState} from 'react';
import {getProviderBids} from '../api';
import {Bid} from '../models';

export const useGetProviderBids = (lat?: number, lng?: number) => {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<Bid[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [totalBidsCount, setTotalBidsCount] = useState<number>(0);
  const [pageCount, setPageCount] = useState<Number>(1);
  const [error, setError] = useState<string | any>();

  useEffect(() => {
    if (page >= 1) {
      getBids();
    } else if (page >= 1 && page >= pageCount) {
      return;
    }
  }, [page]);

  const refreshing = () => {
    setError('');
    setPage(1);
    setRefresh(true);
    getBids();
  };

  const fetchMore = () => {
    setError('');
    setPage(page + 1);
    if (page >= 1 && page < pageCount) {
      setLoading(true);
    }
  };

  const getBids = async () => {
    try {
      // set loading coming from calling func
      //cal func to get api
      const providerBids = await getProviderBids({
        page: page,
        lat: lat,
        lng: lng,
        orderType: 'GENERAL',
      });

      // check data
      if (providerBids.data.length) {
        setPageCount(providerBids.pageCount);

        if (page == 1) {
          setData(providerBids.data);
        }
        if (page > 1) {
          setData([...(data as Bid[]), ...providerBids.data]);
        }
        setTotalBidsCount(providerBids.totalCount);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setRefresh(false);
    }
  };

  return {
    loading,
    data,
    error,
    refresh,
    totalBidsCount,
    refreshing,
    fetchMore,
  };
};
