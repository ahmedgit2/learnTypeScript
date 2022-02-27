import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {AppGrid, AppText} from '../../commons';
import {VehiclesSelect} from '.';
import {ProviderVehicles} from '../../models';

interface Props {
  vehicles: ProviderVehicles[];
  passSelected: (value: number) => void;
}

export const VehiclesCard: FC<Props> = props => {
  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.clientNameContainerStyle}>
          <View style={styles.vehivlesContainerStyle}>
            <AppText style={{fontWeight: 'bold'}}> {'المركبة'}</AppText>
            <VehiclesSelect
              passSelected={props.passSelected}
              data={props.vehicles}
            />
          </View>
        </View>
      </View>
    </AppGrid>
  );
};
