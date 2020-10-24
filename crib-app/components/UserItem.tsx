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
import mainStyles from '../styles/main';
import Colors from '../constants/Colors';

export default function UserItem({ onPress, item, navigation }) {
  return (
      <TouchableOpacity
      activeOpacity={0.8}
      style={styles.itemContainer}
      onPress={() => navigation.navigate("Profile")}>
        <View style={mainStyles.iconContainer}>
          <Image
            style={mainStyles.iconItem}
            source={item.avatar}
          />
        </View>
        <View style={mainStyles.infoContainer}>
          <Text style={mainStyles.infoTitle}>{item.name}</Text>
          <Text style={mainStyles.infoItem}>{item.points} points</Text>
        </View>
        <View style={mainStyles.timeContainer}>
          <Text style={mainStyles.timeItem}>{item.description}</Text>
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  // ...
  itemContainer: {
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
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
});
