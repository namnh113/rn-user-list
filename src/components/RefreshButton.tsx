import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface IRefreshButtonProps {
  onPress?: () => void;
}

export default function RefreshButton(props: IRefreshButtonProps) {
  const {onPress} = props;
  return (
    <Pressable onPress={onPress} style={styles.btnContainer}>
      <Text style={styles.btnText}>Refresh</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    alignSelf: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 32,
    paddingVertical: 8,
    marginVertical: 16,
    borderRadius: 8,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
