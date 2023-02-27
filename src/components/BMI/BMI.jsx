import React, { useState } from "react";
import "./BMI.css";

function BMI() {
  // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      // Logic for message

      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <div>
          <center>
            <span
              style={{ fontWeight: "bold", fontSize: "3rem", color: "white" }}
            >
              BMI
            </span>
            &nbsp;&nbsp;&nbsp;
            <span
              style={{
                fontWeight: "bold",
                fontSize: "3rem",
                color: "#CA3E47",
              }}
            >
              CALCULATOR
            </span>
          </center>
        </div>

        <form onSubmit={calcBmi}>
          <div>
            <label className="la">Weight (lbs)</label>&nbsp;
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
            &nbsp;&nbsp;&nbsp;
            <label className="la">Height (in)</label>&nbsp;
            <input
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>

          <div></div>

          <div>
            <center>
              <button className="btn1" type="submit">
                Submit
              </button>
              <button
                className="btn btn-outline"
                onClick={reload}
                type="submit"
              >
                Reload
              </button>
            </center>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default BMI;
