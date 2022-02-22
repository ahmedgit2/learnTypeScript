import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {AppButton, AppText} from '../../commons';
import {Lang} from '../../utils';
import {styles} from './style';
import I18n from 'react-native-i18n';

interface Props {
  language: Lang;
  onPress: () => void;
}

export const LoginHeader: FC<Props> = props => {
  return (
    <>
      <View style={styles.headerStyle}>
        <AppText style={styles.textStyle}>{I18n.t('currentLang')}</AppText>
        <AppButton
          onPress={props.onPress}
          title="عربي / En"
          style={styles.buttonStyle}
        />
      </View>
    </>
  );
};
