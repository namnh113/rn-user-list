import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import UserCard from './UserCard';

interface IProps {
  users: any[];
}

export default function UserList(props: IProps) {
  const {users} = props;

  const keyExtractor = (item: any) => item.id;
  const renderItem = ({item}: any) => <UserCard user={item} />;
  return (
    <FlatList
      contentContainerStyle={styles.contentContainerStyle}
      data={users}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapperStyle}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
}

function ItemSeparatorComponent() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 16,
    backgroundColor: '#e1f5dc',
  },
  columnWrapperStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
  },
  separator: {
    height: 16,
    width: 16,
  },
});
