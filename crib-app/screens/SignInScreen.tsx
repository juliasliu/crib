import * as React from 'react';
import {
  TouchableOpacity, 
  Dimensions,
  StyleSheet,
  Button,
  StatusBar,
  Image,
  ScrollView
} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import StyledButton from '../components/StyledButton'
import StyledInput from '../components/StyledInput'
import styles from '../styles/landing';
import Colors from '../constants/Colors'
import { TextInput } from 'react-native-gesture-handler';
import mainStyles from '../styles/main';


export default class App extends React.Component{
    state={
        email:"",
        password:"",
    }
    render(){
    return (
        <View style={styles.container}>
            <ScrollView style ={styles.containerInput}>
            <View style={styles.container}>   
                <Text style={[styles.title, {marginTop: 100}]}>Sign In</Text>
            </View>
            <StyledInput type="text" label="Email"  description="Please enter your email address"style={styles.inputField}/>
            <StyledInput type="password" label="Password"  description="Please enter your password"style={styles.inputField}/>
            <View style={styles.container}>
                <StyledButton title="Sign In" color="green" onPress={()=>alert('registered!')} style={{width:"100%", alginItems:'center', margin: 15}}/>
            </View>
            </ScrollView>  
        </View>
        
        );
    }
}


