import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {AppText} from '../../commons';
import I18n from 'react-native-i18n';
import {styles} from './style';

export const LoginWelcomeText: FC = () => {
  return (
    <View style={styles.welcomeTextContainer}>
      <AppText style={styles.bigText}>{I18n.t('welcome')}</AppText>
      <AppText style={styles.smallText}>
        {I18n.t('loginOrCreateAccount')}
      </AppText>
    </View>
  );
};
