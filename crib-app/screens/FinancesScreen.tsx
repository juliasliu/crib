import * as React from 'react';
import FinancesList from '../components/FinancesList';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';


import styles from '../styles/finances';
export default function TabFourScreen() {
  return (
    <ScrollView style={[styles.scroll, styles.container]}>
      <View style={styles.container}>
        <View style={styles.financesCover}>
          <Text style={styles.title}>Your Balance</Text>
          <Text style={styles.title}>  $999.99</Text>
        </View>
        <FinancesList />
      </View>
    </ScrollView>
  );
}


