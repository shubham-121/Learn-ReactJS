/*This script is for practising the states in the REact*/

import { useState } from "react";

export default function Counter() {
  const style = {
    justifyContent: "center",
    textAlign: "center",
    margin: "auto",
  };

  let [step, setStep] = useState(1);
  let [count1, setCount] = useState(0);

  function increase() {
    if (count1 < 50) {
      if (step > 1) setCount((count1) => count1 + step);
      else setCount((count1) => count1 + 1);
    }
    //or setCount((count1 = count1 + 1));
  }

  function decrease() {
    if (count1 > 0) {
      if (step > 1) setCount((count1 = count1 - step));
      else setCount((count1) => count1 - 1);
    }
  }
  function stepIncrease() {
    setStep(step + 1);
  }

  function stepDecrease() {
    setStep(step - 1);
  }

  return (
    <div>
      <div style={style}>
        <button onClick={decrease}>-</button>
        <span>Count:{count1}</span>
        <button onClick={increase}>+</button>
      </div>

      <div
        style={{
          textAlign: "center",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <br></br>
        <span>
          The count is {count1} and the steps bypassed is {step}
        </span>
      </div>

      <div style={style}>
        <br></br>
        <button onClick={stepDecrease}>-</button>
        <span>Steps:{step}</span>
        <button onClick={stepIncrease}>+</button>
      </div>
    </div>
  );
}
