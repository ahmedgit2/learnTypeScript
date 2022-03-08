import React, {FC, useMemo} from 'react';
import {View} from 'react-native';
import {styles as style} from './styles';
import {AppGrid, AppImage, AppRate, AppText} from '../../commons';
import {appColor, howManyDays} from '../../utils';
import {BidsDetails} from '../../models';
import I18n from 'react-native-i18n';
import dayjs from 'dayjs';
import {selectLang} from '../../slices';

interface Props {
  data: BidsDetails | undefined;
}

export const ClintCard: FC<Props> = ({data}) => {
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);
  const createdAt = data?.createdAt;
  const status = I18n.t(
    data?.status === 'PENDING' ? 'statusPending' : 'statusDone',
    {status: data?.status},
  );
  const days = dayjs().diff(createdAt, 'days');
  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTextContainerStyle}>
          <View style={styles.clientNameContainerStyle}>
            <AppRate text={data?.client.rate} />
            <AppText>{data?.client.user.name}</AppText>
          </View>

          <View style={styles.bidDateContainerStyle}>
            <AppText style={{fontSize: 14, color: appColor.middleGray}}>
              {I18n.t('BidCardHowManyDays', {days: days})}
            </AppText>

            <AppText style={styles.bidStatusStyle}>{status}</AppText>
          </View>
        </View>
        <AppImage src={data?.client.user.profileImg.thumbnail} />
      </View>
    </AppGrid>
  );
};
