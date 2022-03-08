import React, {FC, useState} from 'react';
import {ScrollView} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useGetVehicles} from '../hooks';
import {AppErrorModal, AppLoading, AppText} from '../commons';
import {RootStackParamList} from '../navigator';
import {PostOffer, ProviderVehicles} from '../models';
import {useMutationHook} from '../hooks/use-mutation.hook';
import {postOffer} from '../api';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ClintCard, CreateOfferForm, CreateOfferFormProps} from '../components';

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
  const [modalText, setModalText] = useState<string>();

  const {data, status, mutate} = useMutationHook<PostOffer>({
    api: postOffer,
  });

  const onPress = (value: CreateOfferFormProps) => {
    mutate(
      {
        orderBidId: details.id,
        transportationPrice: value.price,
        notes: value.note,
        providerVehicle: value.vehicle,
      },
      {
        onSuccess: () => {
          setModalText('Success 😃');
          setModalVisible(true);
        },
        onError: error => {
          setModalText(error?.message);
          setModalVisible(true);
        },
      },
    );
  };

  if (loading) {
    return <AppLoading />;
  }

  return (
    <ScrollView>
      <ClintCard data={details} />
      <CreateOfferForm
        onPress={onPress}
        vehicles={vehicles as ProviderVehicles[]}
      />

      <AppErrorModal
        visible={isModalVisible}
        error={modalText}
        onClose={() => {
          setModalVisible(false);
          status == 'success' && navigation.navigate('home');
        }}
      />
    </ScrollView>
  );
};
