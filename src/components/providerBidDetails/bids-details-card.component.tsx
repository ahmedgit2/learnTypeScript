import React, {FC, useMemo} from 'react';
import {View} from 'react-native';
import {styles as style} from './style';
import {AppGrid, AppText} from '../../commons';
import {appColor, Lang} from '../../utils';
import {selectLang} from '../../slices';

interface Props {
  text: any;
  title: string;
}

export const BidDetailsCard: FC<Props> = props => {
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);
  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.bidDetailsContainerStyle}>
          <AppText style={{fontWeight: 'bold'}}> {props.title} </AppText>
          <AppText style={{color: appColor.middleGray}}> {props.text} </AppText>
        </View>
      </View>
    </AppGrid>
  );
};
