import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack} from '.';

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};
