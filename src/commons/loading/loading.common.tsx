import {View, Text, ActivityIndicator} from 'react-native';
import React, {FC} from 'react';
import {styles} from './style';
import {appColor} from '../../utils';

interface Props {
  style?: object;
  containerStyle?: object;
  color?: string;
  size?: number;
}

export const AppLoading: FC<Props> = props => {
  return (
    <View style={[styles.containerStyle, props.containerStyle]}>
      <ActivityIndicator
        size={props.size || 'large'}
        style={[styles.style, props.style]}
        color={props.color || appColor.default}
      />
    </View>
  );
};
