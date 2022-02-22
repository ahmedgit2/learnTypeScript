import React, {FC} from 'react';
import {View, Pressable} from 'react-native';
import {AppText} from '..';
import {styles} from './style';

interface Props {
  style?: object;
  selected: string;
  onPress: () => void;
}

export const ClickableText: FC<Props> = props => {
  return (
    <View
      style={[
        styles.containerStyle,
        props.selected === props.children ? styles.pressed : null,
      ]}>
      <Pressable onPress={props.onPress}>
        <AppText
          style={[
            styles.textStyle,
            props.selected === props.children ? styles.pressedText : null,
          ]}>
          {props.children}
        </AppText>
      </Pressable>
    </View>
  );
};
