import {View, Text, FlatList} from 'react-native';
import React, {FC, useMemo} from 'react';
import {AppText} from '../../commons';
import {styles as style} from './style';
import {useAppSelector} from '../../hooks';
import I18n from 'react-native-i18n';

interface Props {
  count: number;
}

export const ProviderBidsHeader: FC<Props> = props => {
  const language = useAppSelector(state => state.lang.value);
  const styles = useMemo(() => style(language), [language]);

  return (
    <View style={styles.headerStyle}>
      <AppText style={{fontSize: 15, fontWeight: 'bold'}}>
        {I18n.t('BidsCount', {count: props.count})}
      </AppText>
      <AppText style={{fontSize: 30, fontWeight: 'bold'}}>
        {I18n.t('BidsHeader')}
      </AppText>
    </View>
  );
};
