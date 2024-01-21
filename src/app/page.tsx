"use client";

import { useEffect, useState } from "react";

import ClockStyles from "@/styles/components/ClockStyles";
import HrHandStyles from "@/styles/components/HrHandStyles";
import MinHandStyles from "@/styles/components/MinHandStyles";
import SecHandStyles from "@/styles/components/SecHandStyles";

import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/store";
import { updateDate} from "@/lib/features/time/timeSlice";

export default function Home() {
  const [date, setDate] = useState(new Date());

  //const date = useAppSelector((state) => state.time.date);
  const dispatch = useAppDispatch();

  useEffect(() => {

    const timerId = setInterval(() => {
      setDate(new Date());
      dispatch(updateDate());
    }, 1000);

    //dispatch(increment());

    //console.log("check date Hr type", typeof date.getHours());

    // Get time
    // const time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    // const [h, m, s] = time;

    // // Get angles
    // const degHour = h * (360 / 12) + m * (360 / 12 / 60);
    // const degMin = m * (360 / 60) + s * (360 / 60 / 60);
    // const degSec = s * (360 / 60);

    return () => clearInterval(timerId);
  }, [date]);

  return (
    <ClockStyles>
      {/* <HrHandStyles degree={degHour}></HrHandStyles>
      <MinHandStyles degree={degMin}></MinHandStyles>
      <SecHandStyles degree={degSec}></SecHandStyles> */}
      {/* <div>{date.getDate()}</div> */}
    </ClockStyles>
  );
}
