import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {AppGrid, AppText} from '../../commons';
import {appColor, Lang} from '../../utils';

interface Props {
  text: any;
  title: string;
}

export const BidDetailsCard: FC<Props> = props => {
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
