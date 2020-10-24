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
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Colors from '../constants/Colors';

export default function StyledInput({ type, label, value, icon, placeholder, size, style, editable }) {

  const handleText = () => {

  }
  const handleEmail = () => {

  }
  const handlePassword = () => {

  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>
        {label}
      </Text>
      <View style={styles.inputIconContainer}>
        {
          icon && <Icon style={styles.inputIcon} name={icon} size={20} />
        }
        {
          type === "text" ? (
            <TextInput style = {[styles.input, style, !editable && { color: Colors.gray }]}
               underlineColorAndroid = "transparent"
               value = {value}
               placeholder = {placeholder}
               autoCapitalize = "none"
               onFocus = {handleText}
               onChangeText = {handleText}
               editable={editable}/>
          ) : type === "email" ? (
            <TextInput style = {[styles.input, style, !editable && { color: Colors.gray }]}
               underlineColorAndroid = "transparent"
               value = {value}
               placeholder = {placeholder}
               autoCapitalize = "none"
               onChangeText = {handleEmail}
               editable={editable}/>
          ) : type === "password" ? (
            <TextInput style = {[styles.input, style, !editable && { color: Colors.gray } ]}
               underlineColorAndroid = "transparent"
               value = {value}
               placeholder = {placeholder}
               autoCapitalize = "none"
               onChangeText = {handlePassword}
               editable={editable}/>
          ) : null
        }
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  // ...
  inputContainer: {
    marginVertical: 10,
  },
  inputLabel: {
    color: Colors.green,
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputIconContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.lightGray,
    borderBottomWidth: 2,
  },
  inputIcon: {
    marginRight: 10,
    color: Colors.gray,
    borderColor: Colors.lightGray,
    borderBottomWidth: 2,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
});
