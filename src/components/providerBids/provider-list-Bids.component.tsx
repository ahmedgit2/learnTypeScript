import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RefreshControl, View} from 'react-native';
import {ProviderBidsCard} from '.';
import {AppList, AppLoading} from '../../commons';
import {Bid} from '../../models';
import {RootStackParamList} from '../../navigator';
import React from 'react';
interface Props {
  data: Bid[];
  onFetchMore?: () => void;
  fetchMoreLoading?: boolean;
  onRefetch?: () => void;
  loading?: boolean;
  isRefetching?: boolean;
}
export const ProviderListBids: React.FC<Props> = ({
  data,
  loading,
  onFetchMore,
  fetchMoreLoading,
  onRefetch,
  isRefetching,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={[{backgroundColor: '#f9f9f9', flex: 1}]}>
      {
        <AppList
          contentContainerStyle={[{flexGrow: 1, marginVertical: 15}]}
          keyExtractor={item => item.id.toString()}
          // ListNoDataComponent={<NoMyOrderData />}
          hideIndicator
          data={data}
          loading={loading}
          renderItem={({item}) => (
            <ProviderBidsCard
              data={item}
              onPress={() =>
                navigation.navigate('detailsScreen', {bidId: item.id})
              }
            />
          )}
          onEndReached={onFetchMore}
          ListFooterComponent={
            loading || fetchMoreLoading ? <AppLoading /> : null
          }
          refreshControl={
            <RefreshControl
              refreshing={isRefetching as boolean}
              onRefresh={onRefetch}
            />
          }
        />
      }
    </View>
  );
};
