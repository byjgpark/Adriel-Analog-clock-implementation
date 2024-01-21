import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/lib/store';
import { ObjectHTMLAttributes } from 'react';

interface timeState {
    currentHr: number;
    currentMin: number;
    currentSec: number;
}

interface CounterState {
  // value: Object;
  time: timeState;
}



const initialState: CounterState = {
  // value: new Date,
  time:  {
    currentHr: 0,
    currentMin: 0,
    currentSec: 0,
  }
}

export const timeSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {

    //   updateDate: (state) => {
    //     state.date = new Date();
    //   },

    //   decrement: (state) => {
    //     state.value -= 1
    //   },

    //   calculateTime: (state, action: PayloadAction<timeState>) => {
    //     state.value += action.payload
    //   },

    //   // Use the PayloadAction type to declare the contents of `action.payload`
    //   incrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value += action.payload
    //   },


    },
  })
  
  export const { updateDate } = timeSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectCount = (state: RootState) => state.time.date
  
  export default timeSlice.reducer