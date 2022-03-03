import React, {FC, useMemo} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {AppGrid, AppInput, AppText} from '../../commons';
import {appColor} from '../../utils';
import {NotesCardText} from '.';
import I18n from 'react-native-i18n';
import {styles as style} from './style';
import {selectLang} from '../../slices';

interface Props {
  onChangeText: (text: string) => void;
}

export const NotesCard: FC<Props> = props => {
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);
  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTextContainerStyle}>
          <View style={styles.clientNameContainerStyle}>
            <AppText style={{color: appColor.middleGray, marginHorizontal: 10}}>
              {I18n.t('Optional')}
            </AppText>
            <AppText style={{fontWeight: 'bold'}}>{I18n.t('Notes')}</AppText>
          </View>

          <View style={styles.bidDateContainerStyle}>
            <AppInput placeholder="" onChangeText={props.onChangeText} />
          </View>
          <NotesCardText />
        </View>
      </View>
    </AppGrid>
  );
};
