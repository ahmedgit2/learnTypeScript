import React, {FC, useMemo} from 'react';
import {styles as style} from './style';
import {selectLang} from '../../../slices';
import {View} from 'react-native';
import {AppImage, AppText, AppTextLogo} from '../../../commons';
import {AppGrid} from '../../../commons';
import {Bid} from '../../../models';
import {CardDate, CardDays, CardLocation, CardNameRate} from '.';

interface Props {
  data: Bid;
  onPress: () => void;
}

export const ProviderBidsCard: FC<Props> = ({data, onPress}) => {
  const profileImage = data.client.user.profileImg.thumbnail;
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);
  return (
    <AppGrid style={styles.cardGridStyle} onPress={onPress}>
      <View style={styles.cardContainerStyle}>
        <AppImage src={profileImage} />
        <View style={styles.cardTextContainerStyle}>
          <CardNameRate client={data.client} />
          <CardDate createdAt={data.createdAt} />
        </View>
      </View>
      <CardLocation data={data} />
      <CardDays createdAt={data.createdAt} />
    </AppGrid>
  );
};
