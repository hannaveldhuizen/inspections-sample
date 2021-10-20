import React from 'react';
import { withPendo } from 'rn-pendo-sdk';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createStackNavigator();

export default withPendo(props => {
  return (
    <NavigationContainer
      onStateChange={props.onStateChange}
      onReady={props.onReady}
    >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
