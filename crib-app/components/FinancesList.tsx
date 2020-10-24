import * as React from 'react';

import {Component} from 'react';
import {useState} from 'react';

import { Dimensions } from 'react-native'
import FinancesListItem from './FinancesListItem'
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
} from 'react-native';


class FinancesList extends Component {
 
    
    handleShowDetails = index => {
      return(
        <View style={styles.container}>
        <Text>show</Text>
        </View>
      )
    };
  
    render() {
      let data =  [{
        name: 'Kobe',
        pts: "100",
        time: '8 mins ago',
      },
      {
        name: 'Robin',
        pts: "50",
        time: '2 hours ago',
      },
      {
        name: 'Julia',
        pts: "30",
        time: '10 weeks ago',
      },]
      const pic = require('../assets/images/ramen.jpg');

  
      return (
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <FinancesListItem
                onTextPress={this.handleShowDetails}
                item={item}
                pic={pic}
              />
            )}
          />
        </View>
      );
    };
  }
  
  export default FinancesList;
  
  const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        paddingTop: 0,
        width: '100%',
       },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      backgroundColor: 'white',
      borderStyle: "solid",
      marginBottom: 1
    }
  });