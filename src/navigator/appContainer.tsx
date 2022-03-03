import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack} from '.';
import {QueryClient, QueryClientProvider} from 'react-query';
export const AppContainer = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
};
