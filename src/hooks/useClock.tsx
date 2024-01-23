// React
import { useEffect, useState } from "react";

// Redux
import { useAppSelector, useAppDispatch} from "@/redux/hooks";
import { calculateTime } from "@/redux/slices/timeSlice";

export const useClock = () => {

  // Hook
  const [date, setDate] = useState<Date>(new Date());
  const [target, setTarget] = useState<String>("");

  // Redux
  const timeArrSelector = useAppSelector((state) => state.time.timeArr);
  const dispatch = useAppDispatch();

  // destructuring assignment from timeArr
  const [degHour, degMin, degSec] = timeArrSelector;

  // Callback Functions
  const handleOnMouseEnter = () => {
    const curTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    setTarget(curTime);
  }

  const handleOnMouseLeave = () => {
    setTarget("");
  }

  // useEffect
  useEffect(() => {
    // Updating time for every 1 sec
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Get time as an array
    const timeArr = [date.getHours(), date.getMinutes(), date.getSeconds()];

    // Dispatching the time array
    dispatch(calculateTime(timeArr));

    // Stops the interval identified by timerId
    return () => clearInterval(timerId);
  }, [date]);
  
    return {target,degHour,degMin,degSec,handleOnMouseEnter,handleOnMouseLeave};
  };


  export default useClock;