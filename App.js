import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={privateStyles.appStyle}>
        <View style={privateStyles.titleContainer}>
          <View style={privateStyles.flex}>
            <Text style={privateStyles.fontSize28}>Offline Inspections</Text>
          </View>
        </View>
        <List />
      </SafeAreaView>
    </>
  );
};

export default App;
