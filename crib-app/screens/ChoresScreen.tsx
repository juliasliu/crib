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
      <StyledButton title="Sign In" color="green" onPress={()=>navigation.navigate('SignInScreen')} style={{width:"60%", marginTop: 20}}/>
      <StyledButton title="Register" color="orange" onPress={()=>navigation.navigate('RegisterScreen')} style={{width:"60%", marginTop: 20}}/>
      

    </View>
  );
}



