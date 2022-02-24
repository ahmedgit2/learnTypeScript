import React, {FC} from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';
import {styles} from './style';

interface Props {
  style?: StyleProp<ImageStyle>;
  src: string | undefined;
}

export const AppImage: FC<Props> = props => {
  return (
    <Image style={[styles.imageStyle, props.style]} source={{uri: props.src}} />
  );
};
