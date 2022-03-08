import {View, Text, StyleProp, TextStyle, TextProps} from 'react-native';
import React, {FC} from 'react';
import {styles} from './style';
import {selectLang} from '../../slices';
import {Lang} from '../../utils';

interface Props extends TextProps {
  style?: StyleProp<TextStyle>;
}

export const AppText: FC<Props> = props => {
  const {style, children, ...rest} = props;
  const textAlign = selectLang() == Lang.ar ? 'right' : 'left';
  const writingDirection = selectLang() == Lang.ar ? 'rtl' : 'ltr';
  return (
    <View style={styles.containerStyle}>
      <Text
        style={[styles.textStyle, {textAlign, writingDirection}, style]}
        {...rest}>
        {children}
      </Text>
    </View>
  );
};
