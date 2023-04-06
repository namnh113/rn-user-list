import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Users from '../screens/Users';

function AppView({children}: any) {
  const insets = useSafeAreaInsets();

  const saveViewStyle = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  return <View style={[saveViewStyle, styles.container]}>{children}</View>;
}

function AppRoutes() {
  return (
    <SafeAreaProvider>
      <AppView>
        <Users />
      </AppView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppRoutes;
