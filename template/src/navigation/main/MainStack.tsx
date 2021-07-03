import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '@/screens/home/Home.screen';

type MainStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
