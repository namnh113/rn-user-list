import React from 'react';
import {View} from 'react-native';
import RefreshButton from '../components/RefreshButton';
import useUserData from '../hooks/useUserData';
import UserList from '../components/UserList';

export default function Users() {
  const [users, reloadUser] = useUserData();

  return (
    <View>
      <RefreshButton onPress={reloadUser} />
      <UserList users={users} />
    </View>
  );
}
