"use client";
// Styled-Component
import ClockStyles from "@/styles/components/ClockStyles";
import HrHandStyles from "@/styles/components/HrHandStyles";
import MinHandStyles from "@/styles/components/MinHandStyles";
import SecHandStyles from "@/styles/components/SecHandStyles";

// React Component
import MouseTracker from "@/components/MouseTracker";
import useClock from "@/hooks/useClock";

export default function Home() {

  // Extracting the hooks from the useClock
  const {target,degHour,degMin,degSec,handleOnMouseEnter,handleOnMouseLeave} = useClock();

  return (
      <ClockStyles
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        {target != "" && (
          <MouseTracker offset={{ x: 10, y: 10 }}>{target}</MouseTracker>
        )}

        <HrHandStyles degree={degHour}></HrHandStyles>
        <MinHandStyles degree={degMin}></MinHandStyles>
        <SecHandStyles degree={degSec}></SecHandStyles>
      </ClockStyles>
  );
}
