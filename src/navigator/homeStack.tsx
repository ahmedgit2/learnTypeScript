import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {langConfig} from '../i18n/index';
import {useAppSelector} from '../hooks';
import {
  DetailsScreen,
  HomeScreen,
  LoginScreen,
  SendBidScreen,
} from '../screens';
import {Lang} from '../utils';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  const authKey = useAppSelector(state => state.user.token);
  const lang = useAppSelector(state => state.lang.value);

  const [init, setInit] = React.useState(false);
  //   set i18n language configuration
  React.useEffect(() => {
    langConfig(lang as Lang);
    setInit(true);
    // I18nManager.allowRTL(lang == 'ar' ? true : false);
    // I18nManager.forceRTL(lang == 'ar' ? true : false);
  }, [lang]);

  return (
    <>
      {init ? (
        <Stack.Navigator initialRouteName={authKey ? 'home' : 'login'}>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="home"
            component={HomeScreen}
          />

          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="details"
            component={DetailsScreen}
          />

          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="sendOffer"
            component={SendBidScreen}
          />
        </Stack.Navigator>
      ) : (
        <></>
      )}
    </>
  );
};
