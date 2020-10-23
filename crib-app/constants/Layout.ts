import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const borderRadius = 10;

export default {
  window: {
    width,
    height,
  },
  borderRadius: borderRadius,
  isSmallDevice: width < 375,
};
