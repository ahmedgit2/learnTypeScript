import React, {FC, useMemo, useState} from 'react';
import {View} from 'react-native';
import {styles as style} from './style';
import {AppGrid, AppText} from '../../commons';
import {VehiclesSelect} from '.';
import {ProviderVehicles} from '../../models';
import I18n from 'react-native-i18n';
import {selectLang} from '../../slices';

interface Props {
  vehicles: ProviderVehicles[];
  passSelected: (value: number) => void;
}

export const VehiclesCard: FC<Props> = props => {
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);
  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.clientNameContainerStyle}>
          <View style={styles.vehivlesContainerStyle}>
            <AppText style={{fontWeight: 'bold'}}>
              {' '}
              {I18n.t('theVehicle')}
            </AppText>
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
