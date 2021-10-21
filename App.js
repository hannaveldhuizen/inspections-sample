import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { withPendo } from 'rn-pendo-sdk';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    background: '#EDF0F2',
    primary: '#006EB7',
    card: '#ffffff',
    text: '#2D2F30',
    border: 'rgba(35,68,90,0.15)',
    notification: '#FFA200',
  },
};

const privateStyles = StyleSheet.create({
  navContainer: {
    backgroundColor: theme.colors.background,
    flexGrow: 1,
  },
});

export default withPendo(props => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={privateStyles.navContainer}>
        <NavigationContainer
          onStateChange={props.onStateChange}
          onReady={props.onReady}
        >
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
});
