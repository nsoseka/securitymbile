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
    height: '28%',
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row', 
    paddingVertical: 10,
  },
  image: {
    width: imageWidth + 20,
    paddingHorizontal: 10,
  },
  passport: {
    width: imageWidth,
    height: imageWidth,
  },
  idDetails: {
    flex: 1,
    flexDirection: 'column',
  },
  detail: {
    fontWeight: '800',
    color: '$primaryBlue',
  },
  item: {
    borderColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 2,
  }
});

