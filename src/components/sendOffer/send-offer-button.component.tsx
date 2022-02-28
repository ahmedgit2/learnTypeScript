import React, {FC} from 'react';
import {styles} from './style';
import {AppButton} from '../../commons';
import I18n from 'react-native-i18n';

interface Props {
  onPress: () => void;
}

export const SendButton: FC<Props> = ({onPress}) => {
  return (
    <AppButton
      style={styles.SendButton}
      onPress={onPress}
      title={I18n.t('sendOfferButton')}
    />
  );
};
