import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import {AppText} from '../../commons';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

interface Props {
  id: number;
}

export const BidDetailsHeader: FC<Props> = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerStyle}>
      <Pressable
        style={styles.backButtonStyle}
        onPress={() => navigation.goBack()}>
        <Ionicons name={'chevron-forward'} color={'#686'} size={35} />
      </Pressable>
      <AppText style={{fontSize: 22, fontWeight: 'bold'}}>
        {`طلب عرض سعر (${props.id})`}
      </AppText>
    </View>
  );
};
