import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppButton, AppText} from '../commons';
import {LoginHeader} from '../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigator';
import {Lang} from '../utils';
import ar from '../i18n/ar';
import en from '../i18n/en';
import {useDispatch} from 'react-redux';
import {selectLang, setToken} from '../slices';

export const OldLoginScreenHOC: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'login'>>();
  const lang = selectLang();

  const dispatch = useDispatch();

  const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE0NCwiaXNzIjoiQXBwLlRyYW5zcG9ydGF0aW9uIiwiaWF0IjoxNjQ0MTQzOTE4LjYwMSwibG9naW5BcyI6IlVTRVIiLCJleHAiOjE5NTk3MTk5MTh9.Zn4RH8ZrnidhOIJa7tuFLeq8y8flWeXZDrcSMWJFff0`;

  return (
    <>
      <LoginHeader lang={lang as Lang} />

      <AppText>Login Screen Components Here</AppText>
      <AppButton
        title={lang === Lang.ar ? ar.login : en.login}
        onPress={() => {
          dispatch(setToken(key));
          navigation.reset({
            index: 0,
            routes: [{name: 'home'}],
          });
        }}
      />
    </>
  );
};
