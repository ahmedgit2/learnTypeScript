import {View, Text} from 'react-native';
import React, {FC, useMemo} from 'react';
import {Control, Controller} from 'react-hook-form';
import {AppGrid, AppInput} from '../../commons';
import {styles} from './style';
import I18n from 'react-native-i18n';
import {selectLang} from '../../slices';
import {LoginFormProps} from '.';

interface Props {
  control: Control<LoginFormProps, any>;
  name: 'phone';
}
export const LoginFormController: FC<Props> = props => {
  const {control, name} = props;

  return (
    <>
      <Controller
        control={control}
        rules={{required: I18n.t('loginError')}}
        name={name}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => {
          return (
            <AppInput
              style={styles.inputStyle}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={error?.message}
              placeholder={I18n.t('loginInputLbLabel')}
              keyboardType="phone-pad"
              textAlign="right"
              defaultValue={value}
              placeholderTextColor={'#157A6F'}
            />
          );
        }}
      />
    </>
  );
};
