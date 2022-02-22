import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {styles} from './style';

interface Props {
  style?: object;
  text: string;
  size?: number;
}

export const AppDateTime: FC<Props> = props => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      <Text style={styles.textStyle}>{props.text}</Text>
      <Fontisto name={'date'} color={'#999'} size={props.size || 16} />
    </View>
  );
};
