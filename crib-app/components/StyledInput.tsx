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

export default function StyledInput({ type, label, value, icon, placeholder, description, size, color, style, editable, handleValue }) {

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.inputLabel,
      color === "green" && {color: Colors.green},
      color === "orange" && {color: Colors.orange},
      color === "yellow" && {color: Colors.yellow},
    ]}>
        {label}
      </Text>
      <View style={styles.inputIconContainer}>
        {
          icon && <Icon style={styles.inputIcon} name={icon} size={20} />
        }
        {
          type === "text" ? (
            <TextInput style = {[styles.input, style, !editable && { color: Colors.darkGray }]}
               underlineColorAndroid = "transparent"
               value = {value}
               placeholder = {placeholder}
               autoCapitalize = "none"
               onChangeText = {handleValue}
               editable={editable}/>
          ) : type === "email" ? (
            <TextInput style = {[styles.input, style, !editable && { color: Colors.darkGray }]}
               underlineColorAndroid = "transparent"
               value = {value}
               placeholder = {placeholder}
               autoCapitalize = "none"
               onChangeText = {handleValue}
               editable={editable}/>
          ) : type === "password" ? (
            <TextInput style = {[styles.input, style, !editable && { color: Colors.darkGray } ]}
              secureTextEntry
              underlineColorAndroid = "transparent"
               value = {value}
               placeholder = {placeholder}
               autoCapitalize = "none"
               onChangeText = {handleValue}
               editable={editable}/>
          ) : null
        }
      </View>
      <Text style={styles.inputDescription}>
        {description}
      </Text>
   </View>
  );
}

const styles = StyleSheet.create({
  // ...
  inputContainer: {
    alignSelf: 'stretch',
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
  inputDescription: {
    color: Colors.gray,
    paddingTop: 5,
  }
});
