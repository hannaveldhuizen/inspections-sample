import {
  createNavigatorFactory,
  NavigationHelpersContext,
  StackRouter,
  useNavigationBuilder,
} from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import { StackView } from '@react-navigation/stack';

import Home from './Home';
import Details from './Details';

function CustomNavigator({ initialRouteName, children, screenOptions, ...rest }) {
  const builder = useNavigationBuilder(StackRouter, {
    children,
    screenOptions,
    initialRouteName,
  });
  const navigation = builder.navigation;
  const { state, descriptors } = builder;
  return (
    <NavigationHelpersContext.Provider value={navigation}>
      <StackView {...rest} state={state} descriptors={descriptors} navigation={navigation} />
    </NavigationHelpersContext.Provider>
  );
}

const navigatorFactory = createNavigatorFactory(CustomNavigator);
const Stack = navigatorFactory();

const privateStyles = StyleSheet.create({
  flexGrow: {
    flexGrow: 1,
  },
});

export default () => (
  <View style={privateStyles.flexGrow}>
    <Stack.Navigator headerMode="screen">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  </View>
);
