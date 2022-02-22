import React, {FC} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {useGetBidDetails} from '../hooks';
import {AppButton, AppLoading, AppText} from '../commons';
import {formatDate} from '../utils';
import {
  BidDetailsHeader,
  BidDetailsLocationCard,
  BidDetailsMainCard,
  BidDetailsCard,
} from '../components';

interface Props {
  loading: boolean;
  refresh: boolean;
  data: [
    {
      id: number;
      createdAt: string;
      client: {
        rate: string;
        user: {name: string; profileImg: {thumbnail: string}};
      };
      pickUpCity: {name: string; governorate: {name: string}};
      dropOffCity: {name: string; governorate: {name: string}};
    },
  ];
  refreshing: () => void;
  fetchMore: () => void;
}

export const ProviderBidsDetailsHOC: FC<Props> = props => {
  const bidId = useRoute().params;
  const navigation = useNavigation();
  const {loading, data, error} = useGetBidDetails(bidId);

  if (Object.keys(data).length) {
    const executionDate = formatDate(data.executionDate);
    const vehicleType = data.vehicleTypes.map(res => res.name);
    const serviceType =
      data.serviceType == 'HOUR' ? 'بالساعة' : data.serviceType;
    return (
      <>
        <BidDetailsHeader id={bidId} />
        <BidDetailsMainCard data={data} />
        <BidDetailsLocationCard data={data} />
        <BidDetailsCard title={'نوع المركبة'} text={vehicleType} />
        <BidDetailsCard title={'الخدمة المطلوبة'} text={serviceType} />
        <BidDetailsCard title={'تاريخ التنفيذ'} text={executionDate} />
        <AppButton
          title={'تقديم عرض سعر'}
          onPress={() => navigation.navigate('sendOffer', {data: data})}
        />
      </>
    );
  } else {
    return <AppLoading />;
  }
};
