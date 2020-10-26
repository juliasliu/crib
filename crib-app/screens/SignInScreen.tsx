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
import StyledInput from '../components/StyledInput'
import styles from '../styles/landing';
import Colors from '../constants/Colors'
import { TextInput } from 'react-native-gesture-handler';


export default class App extends React.Component{
    state={
        email:"",
        password:"",
    }
    render(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <View style ={styles.containerInput}>   
                <StyledInput type="text" label="Email"  description="Please enter a valid email address" style={styles.inputField}/>
                <StyledInput type="password" label="Password"  description="Please enter your password" style={styles.inputField}/>
                <View style={styles.container}>
                    <StyledButton title="Sign in" color="green" onPress={()=>alert('signed in!')} style={{width:"100%", alginItems:'center'}}/>
                </View>
            </View>
        </View>
        );
    }
}


