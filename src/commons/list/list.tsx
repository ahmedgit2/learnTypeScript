import React, {ReactElement} from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText} from '..';
interface Props<T> extends FlatListProps<T> {
  hideIndicator?: boolean;
  loading?: boolean;
  ListNoDataComponent?: ReactElement;
}
export const AppList = function <T>(props: Props<T>) {
  const {hideIndicator, loading, data, ListNoDataComponent, ...rest} = props;
  return (
    <SafeAreaView>
      <FlatList
        showsHorizontalScrollIndicator={!hideIndicator}
        showsVerticalScrollIndicator={!hideIndicator}
        contentContainerStyle={[{flexGrow: 1}]}
        ListFooterComponentStyle={{paddingBottom: 15}}
        data={data}
        keyExtractor={(_, index) => `${index}`}
        onEndReachedThreshold={0.2}
        ListEmptyComponent={() =>
          !loading && data != undefined
            ? ListNoDataComponent || <AppText>No Data</AppText>
            : null
        }
        {...rest}
      />
    </SafeAreaView>
  );
};
