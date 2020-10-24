import * as React from 'react';
import {
  TouchableOpacity, 
  Dimensions,
  StyleSheet,
  Button,
  StatusBar,
  Image
} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import StyledButton from '../components/StyledButton'
import styles from '../styles/landing';
import Colors from '../constants/Colors'


export default function LandingScreen({ navigation }) {
  const pic = require('../assets/images/temp_logo.png');
  return (
    
    <View style={styles.container}>
      <Image source={pic} style={styles.logo} />
      <Text style={styles.title}>Crib</Text>
      <Text style ={styles.text}>insert catch phrase</Text>

      <View style = {styles.button}>
        <TouchableOpacity
          style={styles.signInButton} 
          onPress={()=>navigation.navigate('SignInScreen')}>
            <Text style = {styles.textSign}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.button}>
        <TouchableOpacity 
          style={styles.registerButton} 
          onPress={()=>navigation.navigate('RegisterScreen')}>          
          <Text style = {styles.textReg}>Register</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}



