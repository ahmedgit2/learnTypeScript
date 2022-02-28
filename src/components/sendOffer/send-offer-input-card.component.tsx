import React, {FC, useState} from 'react';
import {View} from 'react-native';

import {styles} from './style';
import {AppGrid, AppInput, AppText} from '../../commons';

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
  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <AppInput
          onChangeText={onChangeText}
          placeholder={'  تقديم عرض *'}
          keyboardType="numeric"
          error={errors}
        />
      </View>
    </AppGrid>
  );
};
