import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SingleOption from '../molecules/singleOption';
import {white} from '../../styles/colors';
import {VERTICAL_2} from '../../utils/spacing';

interface SingleQustion {
  qustion: {[x: string]: string | boolean | any};
  handleAnswerQustion: (ans: string) => void;
}
const SingleQustion: React.FC<SingleQustion> = ({
  qustion,
  handleAnswerQustion,
}) => {
  return (
    <View>
      <Text style={styles.qustionText}>{qustion?.question}</Text>
      <FlatList
        data={qustion?.options}
        renderItem={({item}) => (
          <SingleOption
            qustion={qustion}
            item={item}
            handleAnswerQustion={handleAnswerQustion}
          />
        )}
      />
    </View>
  );
};

export default SingleQustion;

const styles = StyleSheet.create({
  qustionText: {
    color: white,
    marginVertical: VERTICAL_2,
    lineHeight: 24,
    fontSize: 15,
    fontWeight: '600',
  },
});
