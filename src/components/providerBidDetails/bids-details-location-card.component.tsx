import React, {FC} from 'react';
import {View} from 'react-native';

import {styles} from './style';
import {AppGrid, AppTextLogo, AppText} from '../../commons';

interface Props {
  data: {
    id: number;
    status: string;
    createdAt: string;
    client: {
      rate: string;
      user: {name: string; profileImg: {thumbnail: string}};
    };
    pickUpCity: {name: string; governorate: {name: string}};
    dropOffCity: {name: string; governorate: {name: string}};
  };
}

export const BidDetailsLocationCard: FC<Props> = props => {
  const {data} = props;
  const title = `${data.pickUpCity.governorate.name} - ${data.dropOffCity.governorate.name}`;
  const pickUpCity = `${data.pickUpCity.name} - ${data.pickUpCity.governorate.name}`;
  const dropOffCity = `${data.dropOffCity.name} -${data.dropOffCity.governorate.name}`;

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
