import React, {FC, useState} from 'react';
import {View} from 'react-native';

import {styles} from './style';
import {AppGrid, AppInput, AppText} from '../../commons';

interface Props {
  errors: string;
  multiline: string;
  numberOfLines: number;
  onChangeText: (text: string) => void;
}

export const InputCard: FC<Props> = props => {
  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <AppInput
          onChangeText={props.onChangeText}
          placeholder={'  تقديم عرض *'}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputCardText}>
        <AppText> 0 جم</AppText>
        <AppText>+ 15% قيمة مضافة</AppText>
      </View>
      <View style={styles.inputCardText}>
        <AppText> 0 جم</AppText>
        <AppText>إجمالي ما سيدفعة العميل</AppText>
      </View>
      <View style={styles.inputCardText}>
        <AppText> 0 جم</AppText>
        <AppText>صافي الربح</AppText>
      </View>
    </AppGrid>
  );
};
