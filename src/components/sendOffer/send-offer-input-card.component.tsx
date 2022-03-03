import React, {FC, useMemo, useState} from 'react';
import {View} from 'react-native';

import {styles as style} from './style';
import {AppGrid, AppInput, AppText} from '../../commons';
import I18n from 'react-native-i18n';
import {selectLang} from '../../slices';

interface Props {
  errors?: string;
  multiline?: string;
  numberOfLines?: number;
  onChangeText: (text: string) => void;
}

export const InputCard: FC<Props> = ({
  onChangeText,
  errors,
  multiline,
  numberOfLines,
}) => {
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);
  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <AppInput
          onChangeText={onChangeText}
          placeholder={I18n.t('offer') + ' *'}
          keyboardType="numeric"
          error={errors}
        />
      </View>
    </AppGrid>
  );
};
