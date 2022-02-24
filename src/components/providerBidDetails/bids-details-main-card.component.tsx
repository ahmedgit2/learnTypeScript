import {View, Text, FlatList} from 'react-native';
import React, {FC} from 'react';
import {AppGrid, AppImage, AppRate, AppText} from '../../commons';
import {styles} from './style';
import {appColor, howManyDays} from '../../utils';
import {BidsDetails} from '../../models';

interface Props {
  data: BidsDetails | undefined;
}

export const BidDetailsMainCard: FC<Props> = props => {
  const {data} = props;
  const status = data?.status == 'PENDING' ? 'قيد الإنتظار' : 'تم';
  const createDay = howManyDays(data?.createdAt as string);
  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTextContainerStyle}>
          <View style={styles.clientNameContainerStyle}>
            <AppRate text={data?.client.rate.toString()} />
            <AppText>{data?.client.user.name}</AppText>
          </View>

          <View style={styles.bidDateContainerStyle}>
            <AppText style={{fontSize: 14, color: appColor.middleGray}}>
              {createDay}
            </AppText>
            <AppText
              style={[
                styles.bidStatusStyle,
                {fontSize: 14, color: appColor.offerDetailStatusText},
              ]}>
              {status}
            </AppText>
          </View>
        </View>
        <AppImage src={data?.client.user.profileImg.thumbnail} />
      </View>
    </AppGrid>
  );
};
