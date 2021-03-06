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

export default function StyledButton({ onPress, title, size, color, icon, style }) {
  return (
    <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={[
      styles.appButtonContainer,
      size === "sm" && {
        paddingHorizontal: 16,
        paddingVertical: 8,
      },
      size === "lg" && {
        paddingHorizontal: 32,
        paddingVertical: 16,
      },
      color === "green" && mainStyles.greenButton,
      color === "orange" && mainStyles.orangeButton,
      color === "yellow" && mainStyles.yellowButton,
      color === "apple" && mainStyles.appleButton,
      color === "facebook" && mainStyles.facebookButton,
      style
    ]}>
    {
      icon ? <Icon name={icon}
      size={ size === "sm" ? 12 : size === "lg" ? 16 :  14 }
      style={[
        styles.appButtonIcon,
        (color === "green" || color === "orange" || color === "yellow" || color === "apple" || color === "facebook" ) && {
          color: "#fff",
        },
      ]}>
        </Icon> : null
    }
      <Text style={[
        styles.appButtonText,
        size === "sm" && { fontSize: 12 },
        size === "lg" && { fontSize: 16 },
        (color === "green" || color === "orange" || color === "yellow" || color === "apple" || color === "facebook" ) && {
          color: "#fff",
        },
      ]}>
      {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    alignSelf: 'stretch',
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: 'flex',
		flexDirection: 'row',
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 0,
		borderRadius: 10,
    backgroundColor: Colors.veryLightGray,
		shadowColor: Colors.lightGray,
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 1,
		shadowRadius: 0,
    elevation: 8,
  },
  appButtonIcon: {
    paddingRight: 5,
  },
  appButtonText: {
    fontSize: 14,
    color: Colors.darkGray,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
