import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import List from '../components/List';
import SafeView from '../components/SafeView';

const privateStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  fontSize28: {
    fontSize: 28,
  },
  rowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  labelContainer: {
    flex: 3,
  },
});

const Row = ({ item }) => {
  return (
    <TouchableOpacity style={privateStyles.rowContainer} onPress={() => {}}>
      <View style={privateStyles.labelContainer}>
        <Text style={privateStyles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};


export default ({ route }) => {
  const { title } = route.params;

  const data = [
    { id: 1, text: 'A' },
    { id: 2, text: 'Very' },
    { id: 3, text: 'Very' },
    { id: 4, text: 'Very' },
    { id: 5, text: 'Long' },
    { id: 6, text: 'List' },
    { id: 7, text: 'Of' },
    { id: 8, text: 'Random' },
    { id: 9, text: 'Words' },
    { id: 10, text: 'Scroll' },
    { id: 11, text: 'Scroll' },
    { id: 12, text: 'Scroll' },
    { id: 13, text: 'Scroll' },
    { id: 14, text: 'Scroll' },
    { id: 15, text: 'Scroll' },
    { id: 16, text: 'Scroll' },
    { id: 17, text: 'Scroll' },
    { id: 18, text: '!' },
    { id: 19, text: '!' },
    { id: 20, text: '!' },
    { id: 21, text: '!' },
  ];

  const renderItem = ({ item }) => {
    return (
      <Row item={item} />
    );
  };

  return (
    <SafeView>
      <View style={privateStyles.titleContainer}>
        <View style={privateStyles.flex}>
          <Text style={privateStyles.fontSize28}>{title}</Text>
        </View>
      </View>
      <List
        data={data}
        renderItem={renderItem}
      />
    </SafeView>
  );
};
