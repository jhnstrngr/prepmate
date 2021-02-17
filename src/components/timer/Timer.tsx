import React, { useContext, useEffect, useState } from "react";

import { MyContext } from "../../components/state/Context";

function pad(num: number, size: number): string {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

export const Timer = () => {
  const { state } = useContext(MyContext);

  const { items } = state;

  const [timerTime, setTimerTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let total = 0;
    items.forEach((item) => (total = item.time + total));
    setTimerTime(total);
  }, [items]);

  const toggle = () => {};

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimerTime((timerTime) => timerTime + 1);
      }, 1000);
    } else if (!isActive && timerTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timerTime]);

  return (
    <div className="timer-rectangle">
      <div className="time-border">
        <div className="time">
          {pad(Math.floor(timerTime / 60), 2)}:{pad(timerTime % 60, 2)}
        </div>
      </div>
    </div>
  );
};

export default Timer;
