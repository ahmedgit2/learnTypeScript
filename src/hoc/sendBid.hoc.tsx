import React, {FC, useEffect, useRef, useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useGetVehicles, usePostOffer} from '../hooks';
import {AppButton, AppErrorModal, AppLoading} from '../commons';
import {RootStackParamList} from '../navigator';
import {ProviderVehicles} from '../models';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import I18n from 'react-native-i18n';
import {
  ClintCard,
  Header,
  VehiclesCard,
  InputCard,
  NotesCard,
  SendButton,
} from '../components';

export const SendBidHOC: FC = () => {
  const {details} =
    useRoute<RouteProp<RootStackParamList, 'sendOffer'>>().params;
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'detailsScreen'>
    >();
  const providerId = 144;

  const {vehicles, loading} = useGetVehicles({id: providerId});
  const [isModalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [providerVehicle, setProviderVehicle] = useState<Number>();
  const [transportationPrice, setTransportationPrice] = useState<Number>();
  const [notes, setNotes] = useState<string>();

  const {post, error} = usePostOffer();

  useEffect(() => {
    if (error.message) {
      setModalVisible(true);
      setErrorMessage(error.message);
    }
  }, [error]);

  const _onClose = () => {
    setModalVisible(false);
  };

  // this function is temporary ....
  const handlePress = async () => {
    if (!transportationPrice) {
      setErrorMessage(I18n.t('priceError'));
      setModalVisible(true);
    }
    if (!providerVehicle) {
      setErrorMessage(I18n.t('vehicleError'));
      setModalVisible(true);
    }
    if (providerVehicle && transportationPrice) {
      await post({
        orderBidId: details.id,
        transportationPrice: transportationPrice as number,
        providerVehicle: providerVehicle as number,
        notes: notes as string,
      });
    }
  };

  if (loading) {
    return <AppLoading />;
  }
  return (
    <ScrollView>
      <Header />
      <ClintCard data={details} />
      <VehiclesCard
        vehicles={vehicles as ProviderVehicles[]}
        passSelected={val => setProviderVehicle(val)}
      />
      <InputCard
        onChangeText={value => setTransportationPrice(Number(value))}
      />

      <NotesCard onChangeText={value => setNotes(value)} />

      <SendButton onPress={handlePress} />

      <AppErrorModal
        visible={isModalVisible}
        error={errorMessage}
        onClose={() => setModalVisible(false)}
      />
    </ScrollView>
  );
};
