import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {AppGrid, AppInput, AppText} from '../../commons';

interface Props {
  onChangeText: (text: string) => void;
}

export const NotesCard: FC<Props> = props => {
  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTextContainerStyle}>
          <View style={styles.clientNameContainerStyle}>
            <AppText>{'ملاحظات (اختياري)'}</AppText>
          </View>

          <View style={styles.bidDateContainerStyle}>
            <AppInput placeholder="" onChangeText={props.onChangeText} />
          </View>
        </View>
      </View>
    </AppGrid>
  );
};
