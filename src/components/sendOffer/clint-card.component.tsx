import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {AppGrid, AppImage, AppRate, AppText} from '../../commons';
import {appColor, howManyDays} from '../../utils';
import {BidsDetails} from '../../models';

interface Props {
  data: BidsDetails;
}

export const ClintCard: FC<Props> = props => {
  const {data} = props;
  const createDay = howManyDays(data.createdAt);
  const status = data.status == 'PENDING' ? 'قيد الإنتظار' : 'تم';

  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTextContainerStyle}>
          <View style={styles.clientNameContainerStyle}>
            <AppRate text={data.client.rate} />
            <AppText>{data.client.user.name}</AppText>
          </View>

          <View style={styles.bidDateContainerStyle}>
            <AppText style={{fontSize: 14, color: appColor.middleGray}}>
              {createDay}
            </AppText>

            <AppText style={styles.bidStatusStyle}>{status}</AppText>
          </View>
        </View>
        <AppImage src={data.client.user.profileImg.thumbnail} />
      </View>
    </AppGrid>
  );
};
