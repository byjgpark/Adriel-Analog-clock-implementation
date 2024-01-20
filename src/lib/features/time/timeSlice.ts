import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/lib/store';
import { ObjectHTMLAttributes } from 'react';

interface CounterState {
  // value: Object;
  value: number;
  time: Object;
}

const initialState: CounterState = {
  // value: new Date,
  value: 0,
  time: {},
}

export const timeSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      // Use the PayloadAction type to declare the contents of `action.payload`
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
      },

      
    },
  })
  
  export const { increment, decrement, incrementByAmount } = timeSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectCount = (state: RootState) => state.time.value
  
  export default timeSlice.reducer