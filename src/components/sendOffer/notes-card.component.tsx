import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {AppGrid, AppInput, AppText} from '../../commons';
import {appColor} from '../../utils';

interface Props {
  onChangeText: (text: string) => void;
}

export const NotesCard: FC<Props> = props => {
  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTextContainerStyle}>
          <View style={styles.clientNameContainerStyle}>
            <AppText style={{color: appColor.middleGray, marginHorizontal: 10}}>
              {'[اختياري]'}
            </AppText>
            <AppText style={{fontWeight: 'bold'}}>{'ملاحظات'}</AppText>
          </View>

          <View style={styles.bidDateContainerStyle}>
            <AppInput placeholder="" onChangeText={props.onChangeText} />
          </View>
          <View style={styles.notesCard}>
            <View style={styles.notesCardText}>
              <AppText style={{fontWeight: 'bold', color: appColor.darkGray}}>
                {'0 ج.م'}
              </AppText>
              <AppText style={{color: appColor.middleGray}}>
                {'+[15%] القيمة المضافة :'}
              </AppText>
            </View>
            <View style={styles.notesCardText}>
              <AppText
                style={{
                  fontWeight: 'bold',
                  color: appColor.darkGray,
                  fontSize: 18,
                }}>
                {'0 ج.م'}
              </AppText>
              <AppText style={{color: appColor.middleGray}}>
                {'إجمالي ما سيدفعة العميل :'}
              </AppText>
            </View>
            <View style={styles.notesCardText}>
              <AppText style={{fontWeight: 'bold', color: appColor.darkGray}}>
                {'0 ج.م'}
              </AppText>
              <AppText style={{color: appColor.middleGray}}>
                {'صافي الربح :'}
              </AppText>
            </View>
          </View>
        </View>
      </View>
    </AppGrid>
  );
};
