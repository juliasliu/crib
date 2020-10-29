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
import { Input } from 'react-native-elements';


export default class App extends React.Component{
    state={
        name:"",
        email:"",
        password:"",
        houseCode:"",
    }
    render(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <View style ={styles.containerInputReg}>   
            <StyledInput type="text" label="Username" description="This is how your housemates can find you" style={styles.inputField}/>
            <StyledInput type="text" label="Email"  description="Please enter a valid email address"style={styles.inputField}/>
            <StyledInput type="password" label="Password"  description="Please create a unique password"style={styles.inputField}/>
            <StyledInput type="text" label="House code"  description="You can enter a house code here"style={styles.inputField}/>
            <View style={styles.container}>
            <StyledButton title="Register" color="green" onPress={()=>alert('registered!')} style={{width:"100%", alginItems:'center'}}/>
            </View>
            </View>  

        </View>
        );
    }
}


