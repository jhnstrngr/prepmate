import React, { useContext } from "react";

import { MyContext } from "../../components/state/Context";

function pad(num: number, size: number): string {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

export const Timer = () => {
  const { state } = useContext(MyContext);

  const { items } = state;

  let total: number = 0;

  items.forEach((item) => (total = total + item.time));

  return (
    <div className="timer-rectangle">
      <div className="time-border">
        <div className="time">
          {pad(Math.floor(total / 60), 2)}:{pad(total % 60, 2)}
        </div>
      </div>
      {/* <button
        onClick={() => dispatch({ type: "reset", payload: initialState })}
      ></button> */}
    </div>
  );
};

export default Timer;
