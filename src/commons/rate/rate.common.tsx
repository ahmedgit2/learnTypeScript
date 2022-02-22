import React, {FC} from 'react';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AppText} from '..';
import {appColor} from '../../utils';
import {styles} from './style';

interface Props {
  style?: object;
  text: string;
  logoSize?: number;
}

export const AppRate: FC<Props> = props => {
  return (
    <View style={styles.containerStyle}>
      <AppText style={[styles.textStyle, props.style]}>{props.text}</AppText>
      <AntDesign
        name={'star'}
        color={appColor.rateStar}
        size={props.logoSize || 16}
      />
    </View>
  );
};
