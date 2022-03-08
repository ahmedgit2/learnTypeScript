import {UseInfiniteQueryOptions, useInfiniteQuery} from 'react-query';
import {fetcher} from '../api';
import {Page} from '../models';

interface Props<T> {
  url: string;
  dependParams?: any[];
  dependKey?: string;
  option?: UseInfiniteQueryOptions<Page<T>, Error, Page<T>>;
  limit?: number;
}
export const useInfiniteHook = <T>(props: Props<T>) => {
  const {option, url, dependKey, dependParams, limit} = props;
  const restParams = dependParams?.length ? {...dependParams} : [];
  const {
    data: dataPage,
    refetch,
    remove,
    ...rest
  } = useInfiniteQuery<Page<T>, Error, Page<T>>(
    [dependKey || url, restParams],
    async ({pageParam = 1}) => {
      return fetcher<Page<T>>(
        `/${url}${url.includes('?') ? '&' : '?'}page=${pageParam}&limit=${
          limit || 10
        }`,
      );
    },
    {
      ...option,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.pageCount == lastPage.page) {
          return undefined;
        }
        return pages.length + 1;
      },
      refetchOnReconnect: true,
    },
  );

  return {
    data: dataPage?.pages.map(ele => ele.data).flat(),
    onRefetch: () => {
      remove();
      refetch();
    },
    refetch,
    totalCount: dataPage?.pages[0].totalCount,
    remove,
    ...rest,
  };
};
