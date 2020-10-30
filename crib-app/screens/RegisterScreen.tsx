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
import mainStyles from '../styles/main';
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
            <ScrollView style ={styles.containerInput}>
            <View style={styles.container}>   
                <Text style={[styles.title, {color:"#ea832a"}]}>Register</Text>
            </View>
            <StyledInput type="text" color="orange" label="Username" description="This is how your housemates can find you" style={styles.inputField}/>
            <StyledInput type="text" color="orange" label="Email"  description="Please enter a valid email address"style={styles.inputField}/>
            <StyledInput type="password" color="orange" label="Password"  description="Please create a unique password"style={styles.inputField}/>
            <StyledInput type="text" color="orange" label="House code"  description="You can enter a house code here"style={styles.inputField}/>
            <View style={styles.container}>
                <StyledButton title="Register" color="orange" onPress={()=>alert('registered!')} style={{width:"100%", alginItems:'center', margin: 15}}/>
            </View>
            </ScrollView>  
        </View>
        );
    }
}


