import React, {FC, useMemo} from 'react';
import {Text, View} from 'react-native';
import {appColor, formatDate, howManyDays, Lang} from '../../../utils';
import {styles as style} from './style';
import {selectLang} from '../../../slices';
import {AppTextLogo} from '../../../commons';
import {Bid} from '../../../models';

interface Props {
  data: Bid;
}

export const CardLocation: FC<Props> = props => {
  const pickUpCity = `${props.data.pickUpCity.name} - ${props.data.pickUpCity.governorate.name}`;
  const dropOffCity = `${props.data.dropOffCity.name} -${props.data.dropOffCity.governorate.name}`;
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);

  return (
    <View style={styles.bidLocationContainerStyle}>
      <AppTextLogo logoName={'location-exit'} logoColor={'#8BDB81'}>
        {pickUpCity}
      </AppTextLogo>
      <AppTextLogo logoName={'location-enter'} logoColor={'#FC4F4F'}>
        {dropOffCity}
      </AppTextLogo>
    </View>
  );
};
