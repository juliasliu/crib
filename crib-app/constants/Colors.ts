const green = '#5DB075';
const orange = '#E46A01';
const yellow = '#ECDC00';
const gray = '#888';

const tintColorLight = green;
const tintColorDark = '#fff';

export default {
  green: green,
  orange: orange,
  yellow: yellow,
  gray: gray,
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
