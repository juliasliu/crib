import * as React from 'react';

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

interface Props {
  onTextPress: any
  item: any
  pic: any
}

let TEST_DATA =  [{
  name: 'Kobe',
  requested: false,
  transaction: "5.00"
},
{
  name: 'Robin',
  requested: false,
  transaction: "5.00"
},
{
  name: 'Julia',
  requested: true,
  transaction: "5.00"
},]
class FinancesListItem extends React.Component<Props, {collapse:boolean}> {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true
    };
  }

  handleTextPress = () => {
    this.setState({collapse: !this.state.collapse})
  };
  //<Text onPress={this.handleTextPress}>{this.props.item.title}</Text>

  render() {
    return (
      <View style={styles.itemContainer}>        
        <TouchableHighlight 
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={this.handleTextPress}
          style={styles.touchableHighlight}
        >
        <View style={styles.titleRow}>
            <Image source={this.props.pic} style={styles.iconContainer} />
              <Text style={styles.itemTitle}>
                {this.props.item.name}
              </Text>
        </View>

        </TouchableHighlight>
          {
            !this.state.collapse ? 
            <View style={styles.textContainer}>
              <FlatList
                data={TEST_DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem = {({ item }) => (
                  <View style={styles.entryContainer}>
                    <View style={styles.infoContainer}>
                      {
                        item.requested ?
                        <Text style={styles.entryStyle}>Requested</Text>
                        :
                        <Text style={styles.entryStyle}>Paid you</Text>
                      }
                      
                    </View>
                    <View style={styles.timeContainer}>
                      {
                        item.requested ?
                        <Text style={styles.reqStyle}>-$ {item.transaction}</Text>
                        :
                        <Text style={styles.paidStyle}>+$ {item.transaction}</Text>
                      }
                      
                    </View>
                  </View>
                )}
              />
            </View>
              : null
          }
      </View>
      );
    };
  }
  
  export default FinancesListItem;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 1,
      height: 30
    },
    itemContainer: {
      flex: 1,
      borderColor: '#f1f1f1',
      borderBottomWidth: 1,
      marginLeft: 0,
      fontSize: 26
      
    },
    touchableHighlight:{
      paddingLeft:10,
      borderRadius:20,
    },
    titleRow: {
      flexDirection: 'row',
      marginLeft: 0,
      marginRight: 0,
      paddingTop: 10,
      paddingBottom: 10,
    },
    textContainer: {
      flex: 1,
      paddingLeft: 5,
    },
    itemStyle: {
      fontSize: 18,
    },
    itemTitle: {
      color: '#1cad61',
      fontSize: 25,
      fontWeight: 'bold',
      marginLeft:10,
     },
    iconContainer: { //Can be used as a view conatiner or styling the image itself
      alignItems: 'center',
      borderColor: '#5DB075',
      borderRadius: 10,
      borderWidth: 1,
      justifyContent: 'center',
      height: 50,
      width: 50
    },


    entryContainer: {
      flex: 1,
      flexDirection:'row',
      borderBottomWidth: 1,
      borderColor: '#f1f1f1',
      paddingLeft: 5,
    },

    infoContainer: {
      flex: 1,
      paddingLeft: 0,
      paddingRight: 0,
      },
    
    timeContainer: {
      flex:1,
      paddingLeft: 5,
      paddingRight: 5,
      flexDirection: "row",
      alignItems: "baseline",
      justifyContent: "flex-end"
    },


    entryStyle: {
      fontSize: 18,
      alignItems: 'flex-start',
    },
    reqStyle: {
      fontSize: 18,
      color: 'red',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    paidStyle: {
      fontSize: 18,
      color: 'green',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
  
  });