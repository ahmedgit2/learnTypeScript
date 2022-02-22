import React, {FC} from 'react';
import {KeyboardTypeOptions, Text, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AppText} from '..';
import {appColor} from '../../utils';

import {styles} from './style';

interface Props {
  style?: object;
  placeholder: string;
  error?: string;
  value?: string;
  multiline?: boolean;
  numberOfLines?: number;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  onBlur?: () => void;
  onFocus?: () => void;
  onChangeText: (text: string) => void;
}

export const AppInput: FC<Props> = props => {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.inputContainer}>
        <TextInput
          style={props.iconName ? styles.inputLogo : styles.input}
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          placeholder={props.placeholder}
          value={props.value}
          keyboardType={props.keyboardType}
          onChangeText={props.onChangeText}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
        {props.iconName && (
          <AntDesign
            style={styles.logo}
            name={props.iconName}
            size={props.iconSize || 20}
            color={props.iconColor || appColor.default}
          />
        )}
      </View>
      {props.error && <AppText style={styles.errorText}>{props.error}</AppText>}
    </View>
  );
};
