import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {AppGrid, AppText} from '../../commons';
import {VehiclesSelect} from '.';

interface Props {
  data: [{id: number; vehicleModel: {name: string}}];
  passSelected: (value: number) => void;
}

export const VehiclesCard: FC<Props> = props => {
  const {data, passSelected} = props;

  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.clientNameContainerStyle}>
          <View style={styles.vehivlesContainerStyle}>
            <AppText style={{fontWeight: 'bold'}}> {'المركبة'}</AppText>
            <VehiclesSelect passSelected={passSelected} data={data} />
          </View>
        </View>
      </View>
    </AppGrid>
  );
};
