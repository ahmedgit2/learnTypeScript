import React, {FC} from 'react';
import {View, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {AppText} from '..';
import {styles} from './style';

interface Props {
  style?: StyleProp<ViewStyle>;
  textStyle?: object;
  title: string;
  touchableOpacity?: boolean;
  activeOpacity?: number;
  onPress: () => void;
}

export const AppButton: FC<Props> = props => {
  props;
  return (
    <View style={styles.container}>
      {props.touchableOpacity ? (
        <TouchableOpacity
          style={[styles.buttonStyle, props.style]}
          activeOpacity={props.activeOpacity || 0.5}
          onPress={props.onPress}>
          <AppText style={[styles.textStyle, props.textStyle]}>
            {props.title}
          </AppText>
        </TouchableOpacity>
      ) : (
        <RectButton
          style={[styles.buttonStyle, props.style]}
          onPress={props.onPress}>
          <AppText style={[styles.textStyle, props.textStyle]}>
            {props.title}
          </AppText>
        </RectButton>
      )}
    </View>
  );
};
