import React, {Component, FC} from 'react';
import {View, Pressable} from 'react-native';
import {styles} from './style';

interface Props {
  style?: object;
  onPress?: () => void;
}

export const AppGrid: FC<Props> = ({children, onPress, style}) => {
  return (
    <Pressable style={[styles.containerStyle, style]} onPress={onPress}>
      {children}
    </Pressable>
  );
};
