import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

export type ListItemProps = Readonly<{
  name: string;
  property: string;
  inspectedOn: string;
  onPress?: () => void;
}>;

const privateStyles = StyleSheet.create({
  boldLink: {
    color: 'rgb(49, 121, 205)',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 4,
  },
  icon: {
    paddingLeft: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer: {
    paddingVertical: 16,
    flex: 3,
    paddingLeft: 16,
  },
  paddingBottom4: {
    paddingBottom: 4,
  },
  spinnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export const ListItem = ({
  name,
  property,
  inspectedOn,
  onPress,
}: ListItemProps) => {

  return (
    <TouchableOpacity
      style={privateStyles.buttonContainer}
      onPress={onPress}
    >
      <View style={privateStyles.nameContainer}>
        <View style={privateStyles.iconContainer}>
          <Text
            style={[privateStyles.text, privateStyles.boldLink, privateStyles.paddingBottom4]}
            numberOfLines={1}
          >
            {name}
          </Text>
        </View>
        <Text style={[privateStyles.text, privateStyles.paddingBottom4]} numberOfLines={1}>
          {property}
        </Text>
        <Text style={privateStyles.text}>{inspectedOn}</Text>
      </View>
    </TouchableOpacity>
  );
};
