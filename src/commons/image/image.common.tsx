import React, {FC} from 'react';
import {Image, ImageSourcePropType, ImageStyle, StyleProp} from 'react-native';
import {styles} from './style';

interface Props {
  style?: StyleProp<ImageStyle>;
  src: ImageSourcePropType;
}

export const AppImage: FC<Props> = props => {
  return <Image style={[styles.imageStyle, props.style]} source={props.src} />;
};
