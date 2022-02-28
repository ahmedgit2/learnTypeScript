import {useSelector} from 'react-redux';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

// Define a type for the slice state
interface UserState {
  token: string;
}

// Define the initial state using that type
const initialState: UserState = {
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const {setToken} = userSlice.actions;

export const selectToken = () =>
  useSelector((state: RootState) => state.user.token);

export const userReducer = userSlice.reducer;
