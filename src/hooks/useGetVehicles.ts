import {useEffect, useRef, useState} from 'react';
import {getVehicles} from '../api';
import {ProviderVehicles} from '../models';

interface Props {
  id: number;
}

export const useGetVehicles = (props: Props) => {
  const [data, setData] = useState<ProviderVehicles>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    Vehicles();
  }, []);

  const Vehicles = async () => {
    try {
      // set loading coming from calling func
      //cal func to get api
      setLoading(true);
      const providerVehicles = await getVehicles(props);

      // check data
      if (providerVehicles.data.length) {
        setData(providerVehicles.data);
      }
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
