import * as React from 'react';
import Icon from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import {
  FlatList,
  Image,
  ImageBackground,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Colors from '../constants/Colors';

export default function UserItem({ onPress, name, points, avatar, description, navigation }) {
  return (
    <TouchableOpacity
    activeOpacity={0.8}
    style={styles.itemContainer}
    onPress={() => navigation.navigate("Profile")}>
      <Image
        style={styles.iconContainer}
        source={avatar}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>{name}</Text>
        <Text style={styles.infoItem}>{points} points</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeItem}>{description}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  // ...
  itemContainer: {
    borderRadius: 10,
    flexDirection: 'row',
    padding: 20,
    margin: 10,
    backgroundColor: Colors.white,
		shadowColor: Colors.veryLightGray,
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 1,
		shadowRadius: 0,
    elevation: 8,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.lightGray,
  },

  infoContainer: {
    flex: 3,
    paddingHorizontal: 10,
    flexDirection: "column",
    },

  timeContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-end"
  },

  infoTitle: {
    color: Colors.darkGray,
    fontSize: 18,
    fontWeight: 'bold'
   },

  infoItem: {
    color: Colors.green,
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 'bold'
   },
  timeItem: {
    color: Colors.gray,
    fontSize: 14,
    paddingTop: 5,
  },
});
