import React, {FC, useMemo} from 'react';
import {View} from 'react-native';
import {styles as style} from './styles';
import {AppGrid, AppInput, AppText} from '../../commons';
import {appColor} from '../../utils';
import I18n from 'react-native-i18n';
import {selectLang} from '../../slices';

interface Props {
  valueAdded?: number;
  total?: number;
  profit?: number;
}

export const OfferTotalText: FC<Props> = ({profit, valueAdded, total}) => {
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);
  return (
    <View style={styles.offerCardTextContainer}>
      <View style={styles.offerCardText}>
        <AppText style={{fontWeight: 'bold', color: appColor.darkGray}}>
          {valueAdded || '0' + I18n.t('egCurrency')}
        </AppText>
        <AppText style={{color: appColor.middleGray}}>
          {I18n.t('sendOfferValueAdded')}
        </AppText>
      </View>
      <View style={styles.offerCardText}>
        <AppText
          style={{
            fontWeight: 'bold',
            color: appColor.darkGray,
            fontSize: 18,
          }}>
          {total || '0' + I18n.t('egCurrency')}
        </AppText>
        <AppText style={{color: appColor.middleGray}}>
          {I18n.t('sendOfferTotal')}
        </AppText>
      </View>
      <View style={styles.offerCardText}>
        <AppText style={{fontWeight: 'bold', color: appColor.darkGray}}>
          {profit || '0' + I18n.t('egCurrency')}
        </AppText>
        <AppText style={{color: appColor.middleGray}}>
          {I18n.t('sendOfferNetProfit')}
        </AppText>
      </View>
    </View>
  );
};
