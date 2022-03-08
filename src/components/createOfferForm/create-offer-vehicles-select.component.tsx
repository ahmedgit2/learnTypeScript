import React, {FC, useMemo, useState} from 'react';
import {Noop} from 'react-hook-form';
import {View} from 'react-native';
import {ClickableText} from '../../commons';
import {ProviderVehicles} from '../../models';
import {selectLang} from '../../slices';
import {styles as style} from './styles';

interface Props {
  data: ProviderVehicles[];
  onBlur: Noop;
  onChange: (value: number) => void;
  value: number;
}

export const VehiclesSelect: FC<Props> = props => {
  const {onChange, value, onBlur, data} = props;
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);
  return (
    <View style={styles.vehivlesSelectStyle}>
      {data?.map(item => (
        <View key={item.id} style={{marginTop: 10}}>
          <ClickableText
            selected={item.id == value ? item.vehicleModel.name : ''}
            onBlur={onBlur}
            onPress={() => {
              onChange(item.id);
            }}>
            {item.vehicleModel.name}
          </ClickableText>
        </View>
      ))}
    </View>
  );
};
