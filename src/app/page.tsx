"use client";

// Redux
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch} from "@/lib/hooks";;

// Styled-Component
import ClockStyles from "@/styles/components/ClockStyles";
import HrHandStyles from "@/styles/components/HrHandStyles";
import MinHandStyles from "@/styles/components/MinHandStyles";
import SecHandStyles from "@/styles/components/SecHandStyles";

// MouseTracker Component
import MouseTracker from "@/components/MouseTracker";

// Redux
import { calculateTime } from "@/lib/features/time/timeSlice";

export default function Home() {

  // Hook
  const [date, setDate] = useState(new Date());
  const [target, setTarget] = useState("");

  // Redux
  const timeArrTest = useAppSelector((state) => state.time.timeArr);
  const dispatch = useAppDispatch();


  useEffect(() => {

    // Updating time for every 1 sec
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Get time
    const time = [date.getHours(), date.getMinutes(), date.getSeconds()];

    dispatch(calculateTime(time));

    // const [h, m, s] = time;

    // // Get angles
    // const degHour = h * (360 / 12) + m * (360 / 12 / 60);
    // const degMin = m * (360 / 60) + s * (360 / 60 / 60);
    // const degSec = s * (360 / 60);

    return () => clearInterval(timerId);
  }, [date]);

  console.log("check timeArrTest", timeArrTest);

  // destructuring assignment from
  const [degHour, degMin, degSec] = timeArrTest;

  console.log("check target", target);




  return (
    <div>
      {/* {target != "" && (
        <MouseTracker offset={{ x: 0, y: 0 }}>
          This is a {target}
        </MouseTracker>
      )} */}
      <ClockStyles
        onMouseEnter={() => setTarget(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)}
        onMouseLeave={() => setTarget("")}
      >
             {target != "" && (
        <MouseTracker offset={{ x: 0, y: 0 }}>
        {target}
        </MouseTracker>
      )}

        {/* <MouseTracker offset={{ x: 0, y: 0 }}>
          This is a {target}
        </MouseTracker> */}

        <HrHandStyles degree={degHour}></HrHandStyles>
        <MinHandStyles degree={degMin}></MinHandStyles>
        <SecHandStyles degree={degSec}></SecHandStyles>
        {/* {/* <div>{date.getDate()}</div>} */}
        {/* <div>
          {" "}
          Hour : {date.getHours()} Minute {date.getMinutes()} Sec{" "}
          {date.getSeconds()}{" "}
        </div> */}
      </ClockStyles>
    </div>
  );
}
