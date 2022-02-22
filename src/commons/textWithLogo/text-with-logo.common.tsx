import React, {FC} from 'react';
import {
  Text,
  View,
  ColorValue,
  TextStyle,
  ViewStyle,
  StyleProp,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppSelector} from '../../hooks';
import {appColor} from '../../utils';
import {styles} from './style';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle> | undefined;
  logoSize?: number;
  logoColor?: ColorValue;
  logoName: string;
}

export const AppTextLogo: FC<Props> = props => {
  const language = useAppSelector(state => state.lang.value);

  return (
    <View
      style={[
        styles.containerStyle,
        language === 'en' && {flexDirection: 'row-reverse'},
        props.containerStyle,
      ]}>
      <Text style={[styles.textStyle, props.textStyle]}>{props.children}</Text>
      <MaterialCommunityIcons
        name={props.logoName || 'logo-android'}
        color={props.logoColor || appColor.default}
        size={props.logoSize || 20}
      />
    </View>
  );
};
