import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
const imageWidth = Dimensions.get('window').width / 1.2;

export default EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '$largeContainerSize',
    height: '$largeContainerSize'
  }
});

