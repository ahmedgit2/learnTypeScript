import React, {FC} from 'react';
import {Image} from 'react-native';
import {styles} from './style';

interface Props {
  style?: object;
  src: _SourceUri;
}

export const AppImage: FC<Props> = props => {
  return <Image style={[styles.imageStyle, props.style]} source={props.src} />;
};
