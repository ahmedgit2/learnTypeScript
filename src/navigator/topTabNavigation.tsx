import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {rootTopTapsScreens} from '.';
import {appColor, Lang} from '../utils';
import {langConfig} from '../i18n';
import {selectLang} from '../slices';
import I18n from 'react-native-i18n';

const Tab = createMaterialTopTabNavigator();

export const TopTabNav = () => {
  const [init, setInit] = useState<Boolean>(false);
  const lang = selectLang();

  useEffect(() => {
    setInit(true);
    langConfig(lang as Lang);
  }, [lang]);

  return (
    <>
      {init ? (
        <Tab.Navigator>
          {rootTopTapsScreens.map(({component, name}) => {
            return (
              <Tab.Screen
                key={name}
                name={name}
                component={component}
                options={{
                  title: I18n.t(name),
                  tabBarPressColor: appColor.lightGray,
                  tabBarInactiveTintColor: appColor.default,
                  tabBarIndicatorStyle: {backgroundColor: appColor.default},
                }}
              />
            );
          })}
        </Tab.Navigator>
      ) : (
        <></>
      )}
    </>
  );
};
