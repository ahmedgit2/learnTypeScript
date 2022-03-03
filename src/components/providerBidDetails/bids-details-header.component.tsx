import {View, Text, Pressable} from 'react-native';
import React, {FC, useMemo} from 'react';
import {AppText} from '../../commons';
import {styles as style} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import I18n from 'react-native-i18n';
import {selectLang} from '../../slices';

interface Props {
  id: number;
}

export const BidDetailsHeader: FC<Props> = ({id}) => {
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);
  const navigation = useNavigation();
  return (
    <View style={styles.headerStyle}>
      <Pressable
        style={styles.backButtonStyle}
        onPress={() => navigation.goBack()}>
        <Ionicons name={'chevron-forward'} color={'#686'} size={35} />
      </Pressable>
      <AppText style={{fontSize: 22, fontWeight: 'bold'}}>
        {I18n.t('orderNum', {id: id})}
      </AppText>
    </View>
  );
};
