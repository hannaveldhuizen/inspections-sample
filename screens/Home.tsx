import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import List from '../components/List';
import ListItem from '../components/ListItem';
import SafeView from '../components/SafeView';

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

const Row = ({ item, navigation }) => (
  <ListItem
    name={item.name}
    property={item.property}
    inspectedOn={item.date}
    onPress={() => navigation.navigate('Details', { title: item.name })}
  />
);

export default ({ navigation }) => {
  const data = [
    {
      id: 1,
      name: 'Move-in Inspection',
      property: '12 Elm St Unit #1',
      date: '10/12/21',
    },
    {
      id: 2,
      name: 'Property Inspection',
      property: '4060 Lee Ave',
      date: '09/01/21',
    },
    {
      id: 3,
      name: 'Move-out Inspection',
      property: '4280 Lamont St',
      date: '06/22/21',
    },
    {
      id: 4,
      name: 'Annual Inspection',
      property: '5060 Grand Ave',
      date: '02/04/21',
    },
    {
      id: 5,
      name: 'Move-in',
      property: '10 Spectrum Center',
      date: '01/01/21',
    },
    {
      id: 6,
      name: 'Move-in',
      property: '90 Dawes St Apt 1',
      date: '12/12/20',
    },
    {
      id: 7,
      name: 'Move-out',
      property: '7238 Everts Ave',
      date: '10/16/20',
    },
    {
      id: 8,
      name: 'Annual',
      property: '1819 Cass St Unit #2340',
      date: '09/12/20',
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <Row item={item} navigation={navigation} />
    );
  };

  return (
    <SafeAreaView style={privateStyles.appStyle}>
      <View style={privateStyles.titleContainer}>
        <View style={privateStyles.flex}>
          <Text style={privateStyles.fontSize28}>Home</Text>
        </View>
      </View>
      <List
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};
