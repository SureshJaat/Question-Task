import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../store/store';

interface MyVideoList {
  [x: string]: any;
}

const initialState: MyVideoList = {
  currentQustionList: [],
  currentIndex: 0,
};
export const QustionList = createSlice({
  name: 'QustionList',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    modifyQustionData: (state, {payload}) => {
      state.currentQustionList = payload;
    },
    updateIndex: (state, {payload}) => {
      state.currentIndex = payload;
    },
  },
});

export const {modifyQustionData, updateIndex} = QustionList.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.QustionList;

export default QustionList.reducer;
