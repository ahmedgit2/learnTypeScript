import React, {useEffect, useState} from 'react';
import {AppErrorModal, AppLoading} from '../commons';
import {ProviderBidsHeader} from '../components/providerBids/provider-Bids-Main-Header.component';
import {ProviderListBids} from '../components/providerBids/provider-list-Bids.component';
import {useGetSpecificProviderBids} from '../hooks';

export const ProviderBidsSpecificHOC = () => {
  const {loading, data, error, totalBidsCount, refresh, refreshing, fetchMore} =
    useGetSpecificProviderBids();

  const [isModalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  const _onClose = () => {
    setModalVisible(false);
  };

  if (data && !refresh) {
    return (
      <>
        <ProviderBidsHeader count={totalBidsCount} />
        <ProviderListBids
          loading={loading}
          data={data}
          refresh={refresh}
          refreshing={refreshing}
          fetchMore={fetchMore}
        />
        <AppErrorModal
          visible={isModalVisible}
          error={errorMessage}
          onClose={_onClose}
        />
      </>
    );
  } else {
    return <AppLoading />;
  }
};
