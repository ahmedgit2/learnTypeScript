import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppButton, AppText} from '../commons';
import {LoginHeader} from '../components';
import {useAppDispatch, useAppSelector} from '../hooks';
import {setToken, toggleLang} from '../redux';
import I18n from 'react-native-i18n';
import {Lang} from '../utils';

export const LoginScreenHOC: FC = () => {
  const language = useAppSelector(state => state.lang.value);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const key =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE0NCwiaXNzIjoiQXBwLlRyYW5zcG9ydGF0aW9uIiwiaWF0IjoxNjQ0MTQzOTE4LjYwMSwibG9naW5BcyI6IlVTRVIiLCJleHAiOjE5NTk3MTk5MTh9.Zn4RH8ZrnidhOIJa7tuFLeq8y8flWeXZDrcSMWJFff0';

  return (
    <>
      <LoginHeader
        language={language as Lang}
        onPress={() => {
          dispatch(toggleLang());
        }}
      />

      <AppText>Login Screen Components Here</AppText>

      <AppButton
        title={I18n.t('login')}
        onPress={() => {
          dispatch(setToken(key));
          navigation.reset({
            index: 0,
            routes: [{name: 'login' as never}, {name: 'home' as never}],
          });
        }}
      />
    </>
  );
};
