import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {white} from '../../styles/colors';
import {backIcon} from '../../utils/images';
import {heightToDp, widthToDp} from '../../styles/responsive';

interface BackButton {
  onPress: () => void;
}
const BackButton: React.FC<BackButton> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.circleContainer} onPress={onPress}>
      <Image source={backIcon} style={styles.imageCon} resizeMode={'contain'} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  circleContainer: {
    borderWidth: 1,
    borderRadius: widthToDp('4%'),
    width: widthToDp('7%'),
    height: widthToDp('7%'),
    borderColor: white,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCon: {
    width: widthToDp('2%'),
    height: heightToDp('2%'),
  },
});
