import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions, StyleSheet } from 'react-native';

const BORDER_RADIUS = 4;
const imageWidth = Dimensions.get('window').width / 3;

export default EStyleSheet.create({
  container: {
    backgroundColor: '$white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: '30%',
    borderRadius: BORDER_RADIUS,
    marginTop: 10,
    flexDirection: 'column', 
    paddingVertical: 10,
  },
  item: {
    borderColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 2,
  },
  heading: {
    fontWeight: '800',
    fontSize: 25,
    flexDirection: 'column',
    color: '$primaryPurple',
    paddingTop: 10,
  },
  clearHeading: {
    fontWeight: '800',
    color: '$primaryGreen',
  },
  items: {
    padding: 10,
  }
});

