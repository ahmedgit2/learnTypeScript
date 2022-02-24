import React, {FC} from 'react';
import {View} from 'react-native';

import {styles} from './style';
import {AppGrid, AppTextLogo, AppText} from '../../commons';
import {BidsDetails} from '../../models';

interface Props {
  data: BidsDetails | undefined;
}

export const BidDetailsLocationCard: FC<Props> = props => {
  const {data} = props;
  const title = `${data?.pickUpCity.governorate.name} - ${data?.dropOffCity.governorate.name}`;
  const pickUpCity = `${data?.pickUpCity.name} - ${data?.pickUpCity.governorate.name}`;
  const dropOffCity = `${data?.dropOffCity.name} -${data?.dropOffCity.governorate.name}`;

  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.bidLocationContainerStyle}>
          <AppText style={{fontWeight: 'bold'}}>{title} </AppText>
          <AppTextLogo logoName={'location-exit'} logoColor={'#8BDB81'}>
            {pickUpCity}
          </AppTextLogo>
          <AppTextLogo logoName={'location-enter'} logoColor={'#FC4F4F'}>
            {dropOffCity}
          </AppTextLogo>
        </View>
      </View>
    </AppGrid>
  );
};
