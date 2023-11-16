import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Data from '../data/CarbonRate.json';


export default function Calculator(props) {
  <Route path="/Calculator" element={<Calculator />} />
  const [CalculateResult, setCalculateResult] = useState([]);

  return (
    <main>
      <div className="container">
        <h1>Check Your Carbon Emissions</h1>
        <div className="row align-items-start">
          <div className="col">
            <Calculating setCalculatingCallback={setCalculateResult} />
            <a href="https://www.iea.org/data-and-statistics/charts/well-to-wheel-wake-wing-ghg-intensity-of-motorised-passenger-transport-modes-2">Data source </a>
          </div>
          <div className='col'>
            <img src="img/lightrail.png" alt="Washington State Lightrail" width="400px" />
          </div>
        </div>
      </div>
    </main>
  )
}


// implement calculating feature here
function Calculating(props) {
  const [inputMiles, setInputMiles] = useState("")
  const [inputTransportation, setInputTransportation] = useState("")

  const handleMilesChange = (event) => {
    let inputValue = event.target.value;
    setInputMiles(inputValue)
    console.log(inputMiles)
  }

  const handleTransportationChange = (event) => {
    let inputValue = event.target.value;
    setInputTransportation(inputValue)
    console.log(inputTransportation)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting", inputMiles);
    CalculatingCallback()
    setInputMiles("") //empty the input
    setInputTransportation("") //empty the input
  }


  function DropdownMenu() {
    let transportationModes = [];
    for (var i = 0; i < Data.length; i++) {
      //console.log(Data[i].transportation)
      transportationModes.push(Data[i].transportation)
    }
    //console.log(transportationModes)
    let options = transportationModes.map(optionFunction)
    function optionFunction(option) {
      return (
        <option value={option}>{option}</option>
      )
    }

    return (
      <div className="form-group">
        <label for="transportation-options">How will you get there?</label>
        <select id="transportation-options" name="transportation-options" className="form-control" required>
          {options}
        </select>
      </div>
    )
  }

  return (
    <div className="form-container">
      <div className="form-content">
        <form action="CalculatorResult.html" method="post">

          <section className="form-group">
            <label for="mileage">How far are you traveling? (in Miles)</label>
            <input type="text" id="mileage" name="mileage" className="form-control" required />
          </section>

          <DropdownMenu />

          <div className="form-group">
            <button aria-label="Submit" className="btn btn-primary" type="submit">See Results</button>
          </div>
        </form>
      </div>
    </div>
  )
}

function CalculatingCallback() {
  console.log(Data)

  return (
    console.log("hello")
  )
}
