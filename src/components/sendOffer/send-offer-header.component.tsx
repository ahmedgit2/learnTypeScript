import {View, Text, FlatList, Pressable} from 'react-native';
import React, {FC, useMemo} from 'react';
import {AppText} from '../../commons';
import {styles as style} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {appColor} from '../../utils';
import I18n from 'react-native-i18n';
import {selectLang} from '../../slices';

export const Header: FC = () => {
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);
  const navigation = useNavigation();
  return (
    <View style={styles.headerStyle}>
      <Pressable
        style={styles.backButtonStyle}
        onPress={() => navigation.goBack()}>
        <Ionicons name={'chevron-forward'} color={appColor.black} size={35} />
      </Pressable>
      <AppText style={{fontSize: 22, fontWeight: 'bold'}}>
        {I18n.t('orderDetails')}
      </AppText>
    </View>
  );
};
