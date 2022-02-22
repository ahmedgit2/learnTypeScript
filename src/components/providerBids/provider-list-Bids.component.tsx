import {FlatList} from 'react-native';
import React, {FC} from 'react';
import {AppLoading} from '../../commons';
import {ProviderBidsCard} from './provider-bids-card.component';
import {useNavigation} from '@react-navigation/native';

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

export const ProviderListBids: FC<Props> = props => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={props.data}
      refreshing={props.refresh}
      onRefresh={props.refreshing}
      onEndReached={props.fetchMore}
      keyExtractor={(item, index) => item.id.toString()}
      ListFooterComponent={() => (props.loading && <AppLoading />) || null}
      renderItem={({item}) => (
        <ProviderBidsCard
          bids={item}
          onPress={() =>
            navigation.navigate('details' as never, {bidId: item.id} as never)
          }
        />
      )}
    />
  );
};
