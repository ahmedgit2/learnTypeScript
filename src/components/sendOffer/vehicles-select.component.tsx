import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {ClickableText} from '../../commons';
import {styles} from './style';

interface Props {
  data: [{id: number; vehicleModel: {name: string}}];
  passSelected: (value: number) => void;
}

export const VehiclesSelect: FC<Props> = props => {
  const [selected, setSelected] = useState(String);

  return (
    <View style={styles.vehivlesSelectStyle}>
      {props.data?.map(item => (
        <View key={item.id} style={{marginTop: 10}}>
          <ClickableText
            selected={selected}
            onPress={() => {
              setSelected(item.vehicleModel.name);
              props.passSelected(item.id);
            }}>
            {item.vehicleModel.name}
          </ClickableText>
        </View>
      ))}
    </View>
  );
};
