import * as React from 'react';
import FinancesList from '../components/FinancesList';
import {
  Text,
  View,
  ScrollView,
  FlatList
} from 'react-native';
import { Dimensions } from 'react-native'


import styles from '../styles/finances';
import Colors from '../constants/Colors';
import mainStyles from '../styles/main';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
let TEST_DATA =  [{
  name: 'Kobe',
  requested: false,
  transaction: "5.00"
},
{
  name: 'Robin',
  requested: true,
  transaction: "5.00"
},
{
  name: 'Julia',
  requested: true,
  transaction: "5.00"
},]
export default function TabFourScreen() {
  return (
    <ScrollView style={[styles.scroll, styles.container]}>
      <View style={{backgroundColor: Colors.green, height: deviceHeight, position: 'absolute', top: -deviceHeight, left: 0, right: 0}} />

      <View style={styles.container}>
        <View style={styles.financesCover}>
          <Text style={styles.title}>$999.99</Text>
          <Text style={styles.text}>Your Balance</Text>
        </View>

        
          <Text style={[mainStyles.listTitle, {paddingHorizontal:20}]}>Incoming</Text>
          <View style={[styles.incomingContainer]}>
          <FlatList
                data={TEST_DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem = {({ item }) => (
                 
                  <View style={styles.entryContainer}>
                    <View style={ styles.infoContainer}>
                        {
                          item.requested ? 
                            <Text style={styles.entryStyle}>{item.name} Requested</Text>
                          : null
                        }
                    </View>
                    <View style={styles.timeContainer}>
                         {
                          item.requested ?                         
                            <Text style={styles.reqStyle}>-$ {item.transaction}</Text>
                          : null
                         }
                    </View>
                  </View>
              
                )}
              />
        </View>
        
        <Text style={[mainStyles.listTitle, {paddingHorizontal:20}]}>Transaction History</Text>
        <FinancesList />
      </View>
    </ScrollView>
  );
}


