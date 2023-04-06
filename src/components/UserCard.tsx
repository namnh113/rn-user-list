import React, {useRef} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CardFlip from 'react-native-card-flip';

export default function UserCard(props: any) {
  const card = useRef<any>();
  const {user} = props;

  return (
    <CardFlip
      ref={ref => {
        card.current = ref;
      }}
      style={styles.cardContainer}>
      <TouchableOpacity style={styles.card} onPress={() => card.current.flip()}>
        <Image source={{uri: user.avatar}} style={styles.img} />
        <View>
          <Text numberOfLines={1}>
            {user.first_name} {user.last_name}
          </Text>
          <Text numberOfLines={1}>{user?.employment?.title}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => card.current.flip()}>
        <Text>Info:</Text>
        <View>
          <Text numberOfLines={1}>{user.email}</Text>
          <Text numberOfLines={1}>{user?.gender}</Text>
          <Text numberOfLines={1}>{user?.phone_number}</Text>
          <Text numberOfLines={1}>{user?.date_of_birth}</Text>
        </View>
      </TouchableOpacity>
    </CardFlip>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 270,
    borderRadius: 8,
    flexGrow: 1,
    backgroundColor: 'white',
  },
  card: {
    flex: 1,
    padding: 8,
    rowGap: 8,
  },
  img: {
    height: 200,
  },
});
