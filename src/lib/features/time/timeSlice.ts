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
  timeTest: number;
  timeArr: Array<number>;
}



const initialState: CounterState = {
  // value: new Date,
  time:  {
    currentHr: 0,
    currentMin: 0,
    currentSec: 0,
  },
  timeTest: 0,
  timeArr: [0, 0, 0],
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

      calculateTime: (state, action: PayloadAction<Array<number>>) => {
        //state.value += action.payload
        console.log("check action.payload",action.payload);

        const [h, m, s] = action.payload;

        // Get angles
        const degHour = h * (360 / 12) + m * (360 / 12 / 60);
        const degMin = m * (360 / 60) + s * (360 / 60 / 60);
        const degSec = s * (360 / 60);

        state.timeArr = [degHour, degMin, degSec]
      },

    //   // Use the PayloadAction type to declare the contents of `action.payload`
    //   incrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value += action.payload
    //   },
    },
  })
  
  export const { calculateTime } = timeSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectCount = (state: RootState) => state.time.time
  
  export default timeSlice.reducer