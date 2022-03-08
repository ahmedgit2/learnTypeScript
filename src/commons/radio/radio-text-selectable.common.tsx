import React, {FC} from 'react';
import {View, Pressable, PressableProps} from 'react-native';
import {AppText} from '..';
import {styles} from './style';

interface Props extends PressableProps {
  selected: string;
}

export const ClickableText: FC<Props> = props => {
  const {...rest} = props;
  return (
    <View
      style={[
        styles.containerStyle,
        props.selected === props.children ? styles.pressed : null,
      ]}>
      <Pressable {...rest}>
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
