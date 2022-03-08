import React, {FC} from 'react';
import {useForm} from 'react-hook-form';
import {LoginFormController} from '.';
import {AppButton} from '../../commons';
import I18n from 'react-native-i18n';

interface Props {
  onPress: (value: LoginFormProps) => void;
}
export interface LoginFormProps {
  phone: string;
}

export const LoginForm: FC<Props> = ({onPress}) => {
  const {control, handleSubmit} = useForm<LoginFormProps>({
    mode: 'onBlur',
    defaultValues: {phone: undefined},
  });
  return (
    <>
      <LoginFormController control={control} name={'phone'} />
      <AppButton onPress={handleSubmit(onPress)} title={I18n.t('next')} />
    </>
  );
};
