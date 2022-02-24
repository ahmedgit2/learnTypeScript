import {Lang} from './../../utils/lang';
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
    toggleLang: (state, action: PayloadAction<Lang>) => {
      state.value = action.payload;
    },
  },
});

export const {toggleLang} = langSlice.actions;

export const selectLang = (state: RootState) => {
  state.lang.value;
};

export const langReducer = langSlice.reducer;
