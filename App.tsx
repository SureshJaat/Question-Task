/* eslint-disable react-native/no-inline-styles */
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Data} from './Data';
import SingleQustion from './src/components/organisms/singleQustion';
import CustomButton from './src/components/atoms/customButton';
import {black, white} from './src/styles/colors';
import BackButton from './src/components/atoms/backButton';
import {HORIZONTAL_3, VERTICAL_2, VERTICAL_3} from './src/utils/spacing';
// import {useAppSelector} from './src/redux/reduxHooks/hooks';
// import {useAppDispatch} from './src/redux/reduxHooks/hooks';
// import {modifyQustionData} from './src/redux/slice/qustionSlice/qustion';

const App = () => {
  const [currentQustion, setCurrentQustion] = React.useState<any>([]);

  // const {currentQustion,currentIndex} = useAppSelector(state => state.QustionList);

  const [currentIndex, setCurrentIndex] = React.useState(0);
  // const dispatch = useAppDispatch();

  useEffect(() => {
    if (Data.length) {
      let newData: any = Data.map(item => {
        return {...item, userAnswers: '', answerShow: false};
      });
      // if we use redux
      // dispatch(modifyQustionData(newData));
      setCurrentQustion(newData);
    }
  }, []);

  const handleNextQustion = (type: string) => {
    if (type === 'next' && currentIndex < currentQustion?.length - 1) {
      // if we use redux
      // dispatch(updateIndex(currentIndex+1));
      setCurrentIndex(prev => prev + 1);
    } else if (type === 'back' && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleAnswerQustion = (answer: string) => {
    let copy = currentQustion;
    if (copy[currentIndex].userAnswers) {
      Alert.alert('Already  Answered');
    } else {
      copy[currentIndex].userAnswers = answer;
      copy[currentIndex].answerShow = true;

      // if we use redux
      // dispatch(modifyQustionData([...copy]));
      setCurrentQustion([...copy]);
    }
  };
  const handleColor = (qustion: {[x: string]: string | boolean}) => {
    if (qustion?.userAnswers === qustion.answer && qustion.answerShow) {
      return 'green';
    } else if (qustion?.answerShow) {
      if (qustion?.userAnswers !== qustion.answer && qustion?.answerShow) {
        return 'red';
      }
    } else {
      return 'white';
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.backContainer}>
          <BackButton onPress={() => handleNextQustion('back')} />
        </View>
        <Text style={styles.question}>
          Question {currentIndex + 1}/ {currentQustion?.length}
        </Text>
        {currentQustion && (
          <FlatList
            style={{marginVertical: VERTICAL_3}}
            data={currentQustion}
            horizontal
            contentContainerStyle={{
              width: '100%',
              justifyContent: 'space-between',
            }}
            renderItem={item => {
              return (
                <View
                  style={[
                    styles.progressBar,
                    {backgroundColor: handleColor(item?.item)},
                  ]}
                />
              );
            }}
          />
        )}

        {currentQustion?.length ? (
          <SingleQustion
            qustion={currentQustion[currentIndex]}
            handleAnswerQustion={(ans: string) => handleAnswerQustion(ans)}
          />
        ) : null}
        <CustomButton text={'Next'} onPress={() => handleNextQustion('next')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#131830',
  },
  container: {
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#131830',
    marginHorizontal: HORIZONTAL_3,
  },
  text: {
    color: black,
    fontSize: 16,
  },
  progressBar: {
    height: 7,
    width: 20,
    backgroundColor: white,
    borderColor: white,
    borderRadius: 8,
  },
  backContainer: {
    marginVertical: VERTICAL_2,
  },
  question: {
    color: white,
    fontSize: 26,
  },
});
export default App;
