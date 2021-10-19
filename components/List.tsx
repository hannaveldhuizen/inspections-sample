import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
} from 'react-native';
import { ListItem } from './ListItem';

const privateStyles = StyleSheet.create({
  listContainerStyle: {
    borderColor: '#CDD5DB',
    borderRadius: 3,
    borderWidth: 1,
    margin: 16,
    backgroundColor: '#ffffff',
    marginTop: 0,
  },
  rowSeparator: {
    backgroundColor: '#CDD5DB',
    height: StyleSheet.hairlineWidth,
  },
});

const RowSeparator = () => {
  return <View style={privateStyles.rowSeparator} />;
};

const InspectionRow = ({ inspection }) => (
  <ListItem
    name={inspection.name}
    property={inspection.property}
    inspectedOn={inspection.inspectedOn}
    onPress={() => {}}
  />
);

export default () => {
  const data = [
    {
      id: 1,
      name: 'Move-in Inspection',
      property: '12 Elm St Unit #1',
      inspectedOn: '10/12/21',
    },
    {
      id: 2,
      name: 'Property Inspection',
      property: '4060 Lee Ave',
      inspectedOn: '09/01/21',
    },
    {
      id: 3,
      name: 'Move-out Inspection',
      property: '4280 Lamont St',
      inspectedOn: '06/22/21',
    },
    {
      id: 4,
      name: 'Annual Inspection',
      property: '5060 Grand Ave',
      inspectedOn: '02/04/21',
    },
  ];

  const renderInspection = ({ item: inspection }) => {
    return (
      <InspectionRow inspection={inspection} />
    );
  };

  return (
    <View style={privateStyles.listContainerStyle}>
      <FlatList
        bounces
        keyboardShouldPersistTaps="handled"
        data={data}
        renderItem={renderInspection}
        keyExtractor={(item) => `inspection_${item.id}`}
        ItemSeparatorComponent={() => <RowSeparator />}
      />
    </View>
  );
};
