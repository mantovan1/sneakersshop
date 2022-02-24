import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import home from './pages/Home/index';
import detail from './pages/Detail/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      headerMode = "none"
      initialRouteName = "home">
        <Stack.Screen name = "home" component={home} />
        <Stack.Screen name = "detail" component={detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}