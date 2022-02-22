import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store/store';

// Define a type for the slice state
interface LangState {
  value: string;
}

// Define the initial state using that type
const initialState: LangState = {
  value: 'ar',
};

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    toggleLang: state => {
      state.value === 'ar' ? (state.value = 'en') : (state.value = 'ar');
    },
  },
});

export const {toggleLang} = langSlice.actions;

export const selectLang = (state: RootState) => {
  state.lang.value;
};

export const langReducer = langSlice.reducer;
