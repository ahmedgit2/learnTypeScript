import {View, Text, StyleProp, TextStyle} from 'react-native';
import React, {FC} from 'react';
import {styles} from './style';

interface Props {
  style?: StyleProp<TextStyle>;
}

export const AppText: FC<Props> = props => {
  return (
    <View style={styles.containerStyle}>
      <Text style={[styles.textStyle, props.style]}>{props.children}</Text>
    </View>
  );
};
