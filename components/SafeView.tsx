import type { ComponentType, ReactNode } from 'react';
import type { VirtualizedListProps } from 'react-native';
import type { KeyboardAwareProps } from 'react-native-keyboard-aware-scroll-view';

import React, { useState } from 'react';
import {
  StyleSheet,
  VirtualizedList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  listenToKeyboardEvents,
} from 'react-native-keyboard-aware-scroll-view';
import uuidv4 from 'uuid/v4';
import { useHeaderHeight } from '@react-navigation/stack';

// import { useBottomDrawerHeight } from './BottomDrawer';

type Props = Readonly<{
  children: ReactNode;
  refreshControl?: ReactNode;
}>;

const privateStyles = StyleSheet.create({
  minHeight: {
    minHeight: '100%',
  },
  wrappingContainer: {
    flexGrow: 1,
  },
});

type KeyboardAwareVirtualizedHOC = (
  component: ComponentType<VirtualizedListProps<any>>,
) => ComponentType<KeyboardAwareProps & VirtualizedListProps<any>>;

const KeyboardAwareVirtualizedList = (listenToKeyboardEvents as KeyboardAwareVirtualizedHOC)(
  VirtualizedList,
);

const VirtualizedView = React.memo((props: any) => {
  const [listKey] = useState(uuidv4());

  return (
    <KeyboardAwareVirtualizedList
      bounces
      alwaysBounceVertical={!!props.refreshControl}
      contentContainerStyle={privateStyles.wrappingContainer}
      keyboardShouldPersistTaps="handled"
      data={React.Children.toArray(props.children)}
      getItem={(data, index) => data[index]}
      getItemCount={(data) => data.length}
      keyExtractor={() => listKey}
      renderItem={({ item }) => <>{item}</>}
      refreshControl={props.refreshControl}
    />
  );
});

export default ({ children, refreshControl }: Props) => {
  const headerHeight = useHeaderHeight();
  // const { bottomDrawer } = useBottomDrawerHeight();

  // Because the header is part of the layout flow, we have to subtract the header
  // height from react-navigation from the top padding so that there isn't an unsightly gap
  // between react-navigation's header and the contents of the screen being rendered by react-navigation.
  const paddingTop = -headerHeight;

  return (
    <VirtualizedView refreshControl={refreshControl}>
      <SafeAreaView style={[privateStyles.minHeight, { paddingTop }]}>
        {children}
      </SafeAreaView>
    </VirtualizedView>
  );
};
