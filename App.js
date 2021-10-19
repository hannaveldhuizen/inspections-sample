import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { withPendo } from 'rn-pendo-sdk';
import { NavigationContainer } from '@react-navigation/native';

import List from './components/List';

const privateStyles = StyleSheet.create({
  appStyle: {
    backgroundColor: '#EDF0F2',
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  fontSize28: {
    fontSize: 28,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
});

export default withPendo(props => {
  return (
    <NavigationContainer
      onStateChange={props.onStateChange}
      onReady={props.onReady}
    >
      <SafeAreaView style={privateStyles.appStyle}>
        <View style={privateStyles.titleContainer}>
          <View style={privateStyles.flex}>
            <Text style={privateStyles.fontSize28}>Offline Inspections</Text>
          </View>
        </View>
        <List />
      </SafeAreaView>
    </NavigationContainer>
  );
});
