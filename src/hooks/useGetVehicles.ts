import {useEffect, useRef, useState} from 'react';
import {getVehicles} from '../api';

export const useGetVehicles = ProviderId => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    Vehicles();
  }, []);

  const Vehicles = async () => {
    try {
      // set loading coming from calling func
      //cal func to get api
      setLoading(true);
      const providerVehicles = await getVehicles({id: ProviderId});

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
