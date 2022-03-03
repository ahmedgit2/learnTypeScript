import React, {FC, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {AppErrorModal, AppLoading} from '../commons';
import {ProviderBidsHeader} from '../components/providerBids/provider-Bids-Main-Header.component';
import {ProviderListBids} from '../components/providerBids/provider-list-Bids.component';
import {useEligibleBids, useGetProviderBids} from '../hooks';
import {Bid} from '../models';
interface Props {
  isGeneral?: boolean;
}
export const ProviderBidsHOC: FC<Props> = ({isGeneral}) => {
  const {
    error,
    isLoading,
    data,
    totalCount,
    onRefetch,
    isRefetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useEligibleBids({lat: 30.5965, lng: 32.2715, orderType: 'GENERAL'});
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (error) {
      setErrorMessage(error.message);
      setModalVisible(true);
    }
  }, [error]);

  const _onClose = () => {
    setModalVisible(false);
  };

  if (isLoading) return <AppLoading />;

  return (
    <>
      <ProviderBidsHeader count={totalCount || 0} />
      <ProviderListBids
        data={data as Bid[]}
        loading={isLoading}
        onFetchMore={() => {
          if (data && !isLoading && hasNextPage && !isRefetching) {
            fetchNextPage();
          }
        }}
        fetchMoreLoading={isFetchingNextPage}
        isRefetching={isRefetching && !isFetchingNextPage}
        onRefetch={() => {
          onRefetch();
        }}
      />
      <AppErrorModal
        visible={isModalVisible}
        error={errorMessage}
        onClose={_onClose}
      />
    </>
  );
};
