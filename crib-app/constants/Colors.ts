const green = '#1cad61';
const orange = '#E46A01';
const yellow = '#ECDC00';
const lightGray = '#f1f1f1';
const gray = '#DDDDDD';

const tintColorLight = green;
const tintColorDark = '#fff';

export default {
  green: green,
  orange: orange,
  yellow: yellow,
  gray: gray,
  lightGray: lightGray,
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
