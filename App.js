import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);

  let [isOpen, setIsOpen] = useState(true);

  // console.log(step);
  // console.log(setStep);

  // const step = 1;

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
    //alert("Previous");
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
    //alert("Next");
  }

  // function close()       //can also use this in line 35 instead of using arrow function
  // {
  //   setIsOpen(!isOpen)
  // }
  return (
    isOpen && (
      <div>
        <button className="close" onClick={() => setIsOpen(!isOpen)}>
          &times;
        </button>

        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    )
  );
}
