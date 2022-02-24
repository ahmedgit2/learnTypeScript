import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {rootMainStackScreens} from '.';
import {useAppSelector, useInitialRouteName} from '../hooks';
import {langConfig} from '../i18n';
import {Lang} from '../utils';
import {I18nManager} from 'react-native';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  const initialRoute = useInitialRouteName();
  const lang = useAppSelector<Lang>(state => state.lang.value as Lang);
  const [init, setInit] = useState<Boolean>(false);

  useEffect(() => {
    setInit(true);
    langConfig(lang as Lang);
    // I18nManager.allowRTL(lang == Lang.ar ? true : false);
    // I18nManager.forceRTL(lang == Lang.ar ? true : false);
  }, [lang]);

  return (
    <>
      {init ? (
        <Stack.Navigator initialRouteName={initialRoute}>
          {rootMainStackScreens.map(({component, name}) => {
            return (
              <Stack.Screen
                key={name}
                name={name}
                component={component}
                options={{
                  headerShown: false,
                }}
              />
            );
          })}
        </Stack.Navigator>
      ) : (
        <></>
      )}
    </>
  );
};
