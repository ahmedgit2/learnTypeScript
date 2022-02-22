import React, {useEffect, useRef, useState} from 'react';
import {ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useGetVehicles, usePostOffer} from '../hooks';
import {AppButton, AppLoading, ERRORModal} from '../commons';
import {
  ClintCard,
  Header,
  VehiclesCard,
  InputCard,
  NotesCard,
} from '../components';

export const SendBidHOC = () => {
  const {data} = useRoute().params;
  console.log('data----------------->', data);
  providerId = 144;
  const orderBidId = data.id;
  const providerVehicle = useRef();
  const transportationPrice = useRef();
  const notes = useRef('');

  const {post, error} = usePostOffer({
    orderBidId: orderBidId,
    transportationPrice: Number(transportationPrice.current),
    providerVehicle: Number(providerVehicle.current),
    notes: notes.current,
  });

  const {data: vehicles, loading} = useGetVehicles(providerId);
  const [isModalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (error.message) {
      setModalVisible(true);
      setErrorMessage(error.message);
    }
  }, [error]);
  const _onClose = () => {
    setModalVisible(false);
  };
  if (loading) {
    return <AppLoading />;
  }
  return (
    <>
      <ScrollView>
        <Header />
        <ClintCard data={data} />
        <VehiclesCard
          data={vehicles}
          passSelected={val => (providerVehicle.current = val)}
        />
        <InputCard
          onChangeText={value => (transportationPrice.current = value)}
        />
        <NotesCard onChangeText={value => (notes.current = value)} />
        <AppButton
          onPress={async () => {
            setErrorMessage('');
            await post();
          }}
          title={'إرسال'}
        />
      </ScrollView>
      <ERRORModal
        t
        onPress={_onClose}
        Visible={isModalVisible}
        error={errorMessage}
        onClose={_onClose}
      />
    </>
  );
};
