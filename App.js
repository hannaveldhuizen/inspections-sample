import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { withPendo } from './pendo/wrappers';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './screens/AppNavigator';

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
  const navigationRef = useRef();

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={privateStyles.navContainer}>
        <NavigationContainer
          ref={navigationRef}
          onStateChange={() => {
            if (props.onStateChange) {
              const state = navigationRef.current.getRootState();
              props?.onStateChange(state);
            }
          }}
          onReady={() => {
            if (props.onStateChange) {
              const state = navigationRef.current.getRootState();
              props?.onStateChange(state);
            }
          }}
        >
          <AppNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
});
