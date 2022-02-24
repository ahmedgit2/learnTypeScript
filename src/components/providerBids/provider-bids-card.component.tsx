import React, {FC, useMemo} from 'react';
import {Text, View} from 'react-native';

import {AppImage, AppText, AppTextLogo} from '../../commons';
import {appColor, formatDate, howManyDays, Lang} from '../../utils';
import {styles as style} from './style';
import {AppGrid, AppRate} from '../../commons';
import {useAppSelector} from '../../hooks';
import {Bid} from '../../models';

interface Props {
  date: Bid;
  onPress: () => void;
}

export const ProviderBidsCard: FC<Props> = props => {
  const language = useAppSelector(state => state.lang.value as Lang);
  const styles = useMemo(() => style(language), [language]);

  const createDate = formatDate(props.date.createdAt);
  const time = howManyDays(props.date.createdAt);
  const pickUpCity = `${props.date.pickUpCity.name} - ${props.date.pickUpCity.governorate.name}`;
  const dropOffCity = `${props.date.dropOffCity.name} -${props.date.dropOffCity.governorate.name}`;

  return (
    <AppGrid style={styles.cardGridStyle} onPress={props.onPress}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTextContainerStyle}>
          <View style={styles.clientNameContainerStyle}>
            <AppRate text={props.date.client.rate.toString()} />
            <AppText>{props.date.client.user.name}</AppText>
          </View>
          <View style={styles.bidDateContainerStyle}>
            <AppTextLogo
              textStyle={{color: appColor.middleGray, fontSize: 14}}
              logoName={'calendar-month-outline'}
              logoSize={18}
              logoColor={appColor.middleGray}>
              {createDate}
            </AppTextLogo>
          </View>
        </View>
        <AppImage src={props.date.client.user.profileImg.thumbnail} />
      </View>
      <View style={styles.bidLocationContainerStyle}>
        <AppTextLogo logoName={'location-exit'} logoColor={'#8BDB81'}>
          {pickUpCity}
        </AppTextLogo>
        <AppTextLogo logoName={'location-enter'} logoColor={'#FC4F4F'}>
          {dropOffCity}
        </AppTextLogo>
      </View>
      <AppText
        style={
          language == 'ar'
            ? {
                color: appColor.middleGray,
                position: 'absolute',
                bottom: 20,
                right: 100,
              }
            : {
                color: appColor.middleGray,
                position: 'absolute',
                bottom: 20,
                left: 80,
              }
        }>
        {time}
      </AppText>
    </AppGrid>
  );
};
