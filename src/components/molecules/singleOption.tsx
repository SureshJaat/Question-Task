/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {green, red, white} from '../../styles/colors';
import {VERTICAL_2} from '../../utils/spacing';
import {heightToDp} from '../../styles/responsive';

interface SingleOption {
  item: any;
  handleAnswerQustion: any;
  qustion: any;
}
const SingleOption: React.FC<SingleOption> = ({
  item,
  handleAnswerQustion,
  qustion,
}) => {
  const handleColor = () => {
    if (qustion?.userAnswers === qustion.answer) {
      if (qustion?.userAnswers === item) {
        return green;
      }
    } else if (qustion?.answerShow) {
      if (qustion?.userAnswers !== qustion.answer && qustion?.answerShow) {
        if (qustion?.userAnswers === item) {
          return red;
        }
      }
    }
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleAnswerQustion(item)}>
      <Text style={styles.text}>{item}</Text>
      <View
        style={[
          styles.circleContainer,
          {
            backgroundColor:
              qustion.answer === item && qustion?.answerShow
                ? green
                : handleColor(),
          },
        ]}
      />
    </TouchableOpacity>
  );
};

export default SingleOption;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    marginVertical: heightToDp('1.5%'),
    padding: VERTICAL_2,
    borderColor: white,
    borderRadius: 20,
  },
  circleContainer: {
    borderWidth: 1,
    borderRadius: 50,
    width: 20,
    height: 20,
    borderColor: white,
  },
  text: {
    color: white,
  },
});
