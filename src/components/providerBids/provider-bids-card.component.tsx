import React, {FC, useMemo} from 'react';
import {View} from 'react-native';

import {AppImage, AppText, AppTextLogo} from '../../commons';
import {formatDate} from '../../utils';
import {styles as style} from './style';
import {AppDateTime, AppGrid, AppRate} from '../../commons';
import {useAppSelector} from '../../hooks';

interface Props {
  bids: {
    id: number;
    createdAt: string;
    client: {
      rate: string;
      user: {name: string; profileImg: {thumbnail: string}};
    };
    pickUpCity: {name: string; governorate: {name: string}};
    dropOffCity: {name: string; governorate: {name: string}};
  };

  onPress: () => void;
}

export const ProviderBidsCard: FC<Props> = props => {
  const language = useAppSelector(state => state.lang.value);
  const styles = useMemo(() => style(language), [language]);

  const createDate = formatDate(props.bids.createdAt);
  const pickUpCity = `${props.bids.pickUpCity.name} - ${props.bids.pickUpCity.governorate.name}`;
  const dropOffCity = `${props.bids.dropOffCity.name} -${props.bids.dropOffCity.governorate.name}`;

  return (
    <AppGrid style={styles.cardGridStyle} onPress={props.onPress}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTextContainerStyle}>
          <View style={styles.clientNameContainerStyle}>
            <AppRate text={props.bids.client.rate} />
            <AppText>{props.bids.client.user.name}</AppText>
          </View>
          <View style={styles.bidDateContainerStyle}>
            <AppDateTime text={createDate} />
          </View>
        </View>
        <AppImage src={{uri: props.bids.client.user.profileImg.thumbnail}} />
      </View>
      <View style={styles.bidLocationContainerStyle}>
        <AppTextLogo logoName={'location-exit'} logoColor={'#8BDB81'}>
          {pickUpCity}
        </AppTextLogo>
        <AppTextLogo logoName={'location-enter'} logoColor={'#FC4F4F'}>
          {dropOffCity}
        </AppTextLogo>
      </View>
    </AppGrid>
  );
};
