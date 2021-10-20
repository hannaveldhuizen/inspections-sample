import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
} from 'react-native';

type Props = Readonly<{
  data?: Array<any> | [];
  renderItem: any;
}>;

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

export default ({ data, renderItem }: Props) => {
  return (
    <View style={privateStyles.listContainerStyle}>
      <FlatList
        bounces
        keyboardShouldPersistTaps="handled"
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => `item_${item.id}`}
        ItemSeparatorComponent={() => <RowSeparator />}
      />
    </View>
  );
};
