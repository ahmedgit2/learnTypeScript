import {useState} from 'react';
import {postOffer} from '../api';
import {PostOffer} from '../models';

export const usePostOffer = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>('');

  const post = async (props: PostOffer) => {
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
