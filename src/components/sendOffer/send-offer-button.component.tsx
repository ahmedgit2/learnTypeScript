import React, {FC, useMemo} from 'react';
import {styles as style} from './style';
import {AppButton} from '../../commons';
import I18n from 'react-native-i18n';
import {selectLang} from '../../slices';

interface Props {
  onPress: () => void;
}

export const SendButton: FC<Props> = ({onPress}) => {
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);

  return (
    <AppButton
      style={styles.SendButton}
      onPress={onPress}
      title={I18n.t('sendOfferButton')}
    />
  );
};
