import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './main/MainStack';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
