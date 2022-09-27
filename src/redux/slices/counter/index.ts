import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CounterState } from '@interfaces/reduxInterfaces';

const initialState: CounterState = {
  value: 1
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 10;
    },
    decrement: state => {
      state.value -= 10;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
