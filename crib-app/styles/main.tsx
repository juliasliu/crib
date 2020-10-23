import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.gray,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  iconButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: Colors.green,
    padding: 10,
    color: "#fff",
    borderRadius: 50,
  },
  iconLabel: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
