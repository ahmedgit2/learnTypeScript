import React, {Component, FC} from 'react';
import {View, Pressable} from 'react-native';
import {styles} from './style';

interface Props {
  style?: object;
  onPress?: () => void;
}

export const AppGrid: FC<Props> = props => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={[styles.containerStyle, props.style]}>{props.children}</View>
    </Pressable>
  );
};
