import {FlatList} from 'react-native';
import React, {FC} from 'react';
import {AppLoading} from '../../commons';
import {useNavigation} from '@react-navigation/native';
import {Bid} from '../../models';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigator';
import {ProviderBidsCard} from '.';

interface Props {
  data: Bid[];
  loading: boolean;
  refresh: boolean;
  refreshing: () => void;
  fetchMore: () => void;
}

export const ProviderListBids: FC<Props> = props => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
          data={item}
          onPress={() => navigation.navigate('detailsScreen', {bidId: item.id})}
        />
      )}
    />
  );
};
