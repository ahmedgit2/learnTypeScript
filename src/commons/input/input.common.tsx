import React, {FC} from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AppText} from '..';
import {appColor} from '../../utils';

import {styles} from './style';

interface Props extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  error?: string;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
}

export const AppInput: FC<Props> = props => {
  const {iconColor, iconName, iconSize, error, ...rest} = props;
  return (
    <View style={[styles.container, props.containerStyle]}>
      <View style={styles.inputContainer}>
        <TextInput
          style={iconName ? styles.inputLogo : styles.input}
          {...rest}
        />
        {iconName && (
          <AntDesign
            style={styles.logo}
            name={iconName}
            size={iconSize || 20}
            color={iconColor || appColor.default}
          />
        )}
      </View>
      {error && <AppText style={styles.errorText}>{error}</AppText>}
    </View>
  );
};
