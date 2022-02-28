import {View, Text, FlatList, Pressable} from 'react-native';
import React, {FC} from 'react';
import {AppText} from '../../commons';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {appColor} from '../../utils';

interface Props {}

export const Header: FC<Props> = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerStyle}>
      <Pressable
        style={styles.backButtonStyle}
        onPress={() => navigation.goBack()}>
        <Ionicons name={'chevron-forward'} color={appColor.black} size={35} />
      </Pressable>
      <AppText style={{fontSize: 22, fontWeight: 'bold'}}>
        {`تفاصيل الطلب`}
      </AppText>
    </View>
  );
};
