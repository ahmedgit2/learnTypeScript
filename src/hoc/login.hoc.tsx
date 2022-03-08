import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigator';
import {useDispatch} from 'react-redux';
import {selectLang, toggleLang} from '../slices';
import {LoginForm, LoginLogo, LoginWelcomeText} from '../components';

export const LoginHOC: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'login'>>();
  const lang = selectLang();
  const dispatch = useDispatch();

  const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE0NCwiaXNzIjoiQXBwLlRyYW5zcG9ydGF0aW9uIiwiaWF0IjoxNjQ0MTQzOTE4LjYwMSwibG9naW5BcyI6IlVTRVIiLCJleHAiOjE5NTk3MTk5MTh9.Zn4RH8ZrnidhOIJa7tuFLeq8y8flWeXZDrcSMWJFff0`;

  return (
    <>
      <LoginLogo />
      <LoginWelcomeText />
      <LoginForm />
    </>
  );
};
