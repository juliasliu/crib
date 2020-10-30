import * as React from 'react';
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Button,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import StyledButton from '../components/StyledButton'
import styles from '../styles/landing';
import mainStyles from '../styles/main';
import Colors from '../constants/Colors'


export default function LandingScreen({ navigation }) {
  const pic = require('../assets/images/temp_logo.png');

  return (
    <View style={[mainStyles.container, styles.container]}>
      <View style={[styles.landingContainer]}>
        <Image source={pic} style={styles.logo} />
        <View style={styles.landingTitle}>
          <Text style={styles.title}>crib</Text>
          <Text style ={styles.text}>the grocery and household app</Text>
        </View>
        <StyledButton title="Sign In with Facebook" color="facebook" icon="facebook" onPress={()=>navigation.navigate('SignIn')} style={{marginVertical: 10}}/>
        <StyledButton title="Sign In with Apple" color="apple" icon="apple" onPress={()=>navigation.navigate('SignIn')} style={{marginVertical: 10}}/>
        <StyledButton title="Sign In with Email" color="green" icon="envelope" onPress={()=>navigation.navigate('SignIn')} style={{marginTop: 10, marginBottom: 20}}/>
        <Text style={[mainStyles.subtitle]}>Don't have an account yet?</Text>
        <StyledButton title="Register" color="orange" onPress={()=>navigation.navigate('Register')} style={{marginBottom: 20}}/>
        <View style={mainStyles.row}>
          <Text style={[mainStyles.link, {marginHorizontal: 10}]}>Terms of Use</Text>
          <Text style={[mainStyles.link, {marginHorizontal: 10}]}>Privacy Policy</Text>
        </View>
      </View>
    </View>
  );
}
