import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {VERTICAL_2} from '../../utils/spacing';
interface CustomButton {
  text?: String;
  onPress: () => void | undefined;
}
const CustomButton: React.FC<CustomButton> = ({text, onPress}) => {
  return (
    <TouchableOpacity
      disabled={false}
      style={[styles.mainContainer]}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginVertical: VERTICAL_2,
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});
export default React.memo(CustomButton);
