import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

// Define the prop types for initialState Obj
interface timeState {
  timeArr: Array<number>;
}

const initialState: timeState = {
  timeArr: [0, 0, 0],
}

export const timeSlice = createSlice({
    name: 'time',
    initialState,
    reducers: {
      calculateTime: (state, action: PayloadAction<Array<number>>) => {
      
        // Assigning the time array in to h, m, s
        const [h, m, s] = action.payload;

        // Get angles
        const degHour = h * (360 / 12) + m * (360 / 12 / 60);
        const degMin = m * (360 / 60) + s * (360 / 60 / 60);
        const degSec = s * (360 / 60);

        state.timeArr = [degHour, degMin, degSec]
      },

    },
  })
  
  export const { calculateTime } = timeSlice.actions;
  
  export default timeSlice.reducer;