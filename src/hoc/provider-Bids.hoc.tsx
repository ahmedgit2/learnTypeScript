import React, {useEffect, useState} from 'react';
import {AppErrorModal, AppLoading} from '../commons';
import {ProviderBidsHeader} from '../components/providerBids/provider-Bids-Main-Header.component';
import {ProviderListBids} from '../components/providerBids/provider-list-Bids.component';
import {useGetProviderBids} from '../hooks';

export const ProviderBidsHOC = () => {
  const {loading, data, error, totalBidsCount, refresh, refreshing, fetchMore} =
    useGetProviderBids();
  const [isModalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  //   const language = useSelector(state => state.auth.language);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  const _onClose: () => void = () => {
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
