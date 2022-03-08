import {View, Text} from 'react-native';
import React from 'react';
import {AppImage, AppText} from '../../commons';
import I18n from 'react-native-i18n';
import {styles} from './style';

export const LoginLogo = () => {
  return (
    <View style={styles.logoContainer}>
      <AppImage
        style={styles.logoStyle}
        src={require('../../assets/images/logo.png')}
      />
    </View>
  );
};
