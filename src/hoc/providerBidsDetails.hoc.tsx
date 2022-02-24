import React, {FC} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useGetBidDetails} from '../hooks';
import {AppButton, AppLoading, AppText} from '../commons';
import {formatDate} from '../utils';
import {RootStackParamList} from '../navigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Bid, BidsDetails} from '../models';
import i18n from 'react-native-i18n';
import {
  BidDetailsHeader,
  BidDetailsLocationCard,
  BidDetailsMainCard,
  BidDetailsCard,
} from '../components';

export const ProviderBidsDetailsHOC: FC = () => {
  const {bidId} =
    useRoute<RouteProp<RootStackParamList, 'detailsScreen'>>().params;

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'detailsScreen'>
    >();

  const {loading, data, error} = useGetBidDetails({id: bidId});

  const executionDate = formatDate(data?.executionDate as string);
  const vehicleType = data?.vehicleTypes.map(res => res?.name);
  const serviceType =
    data?.serviceType == 'HOUR' ? 'بالساعة' : data?.serviceType;

  if (loading) return <AppLoading />;
  return (
    <>
      <BidDetailsHeader id={bidId} />
      <BidDetailsMainCard data={data} />
      <BidDetailsLocationCard data={data} />
      <BidDetailsCard
        title={i18n.t('BidDetailsVehicleCard')}
        text={vehicleType}
      />
      <BidDetailsCard
        title={i18n.t('BidDetailsServiceCard')}
        text={serviceType}
      />
      <BidDetailsCard
        title={i18n.t('BidDetailsDateCard')}
        text={executionDate}
      />
      <AppButton
        title={i18n.t('BidDetailsButton')}
        onPress={() =>
          navigation.navigate('sendOffer', {data: data as BidsDetails})
        }
      />
    </>
  );
};
