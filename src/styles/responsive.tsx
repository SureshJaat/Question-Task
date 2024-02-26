//Converting pixels to density pixels for responsive designs

import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const widthToDp = (number: string | number) => {
  let givenWidth = typeof number === 'number' ? number : parseFloat(number);

  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const heightToDp = (number: string | number) => {
  let givenHeight = typeof number === 'number' ? number : parseFloat(number);

  return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

export {widthToDp, heightToDp};
