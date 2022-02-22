import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {AppButton} from '../../commons';
import {styles} from './style';
import I18n from 'react-native-i18n';

interface Props {
  onPress: () => void;
}

export const HomeHeader: FC<Props> = props => {
  return (
    <>
      <View style={styles.headerStyle}>
        <AppButton
          onPress={props.onPress}
          title={I18n.t('logout')}
          style={styles.buttonStyle}
        />
      </View>
    </>
  );
};
