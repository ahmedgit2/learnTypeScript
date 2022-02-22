import React from 'react';
import {GeneralScreen, SpecificScreen} from '../screens';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export const TopTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="General" component={GeneralScreen} />
      <Tab.Screen name="Specific" component={SpecificScreen} />
    </Tab.Navigator>
  );
};
