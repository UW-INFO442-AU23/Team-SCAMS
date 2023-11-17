import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Data from '../data/CarbonRate.json';


export default function Calculator(props) {
  <Route path="/Calculator" element={<Calculator />} />

  return (
    <main>
      <div className="container">
        <h1>Check Your Carbon Emissions</h1>
        <div className="row align-items-start">
          <div className="col">
            <Calculating />
            <p>Check our data source
              <a href="https://www.iea.org/data-and-statistics/charts/well-to-wheel-wake-wing-ghg-intensity-of-motorised-passenger-transport-modes-2" target="_blank"> here </a>
            </p>
          </div>
          <div className='col'>
            <Result />
          </div>
        </div>
      </div>
    </main>
  )
}


// implement calculating feature on the left side of the page
function Calculating(props) {
  const [miles, setMiles] = useState("")
  const [transportation, setTransportation] = useState("Walk")

  // get mode of transportation from dataset for the dropdown menu
  function DropdownMenu() {
    let transportationModes = [];
    for (var i = 0; i < Data.length; i++) {
      transportationModes.push(Data[i].transportation)
    }
    let options = transportationModes.map(optionFunction)
    function optionFunction(option) {
      return (
        <option value={option}>{option}</option>
      )
    }
    return (
      <div className="form-group">
        <label for="transportation-options">How will you get there?</label>
        <select id="transportation-options" name="transportation-options" className="form-control" onChange={handleTransportationChange} required>
          {options}
        </select>
      </div>
    )
  }

  const handleMilesChange = (event) => {
    let inputValue = event.target.value;
    setMiles(inputValue)
    console.log(inputValue)
  }

  const handleTransportationChange = (event) => {
    let inputValue = event.target.value;
    setTransportation(inputValue)
    console.log(inputValue)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting", miles, transportation);
    calculatingCallback()
    //setMiles("") //empty the input
    //setTransportation("Walk") //default the input
  }

  function calculatingCallback() {
    let carbonEmission = [];
    for (var i = 0; i < Data.length; i++) {
      carbonEmission.push(Data[i].rate * miles)
    }
    console.log(carbonEmission)
  }

  return (
    <div className="form-container">
      <div className="form-content">
        <form>
          <section className="form-group">
            <label for="mileage">How far are you traveling? (in Miles)</label>
            <input type="text" id="mileage" name="mileage" className="form-control" onChange={handleMilesChange} required />
          </section>
          <DropdownMenu />
          <div className="form-group">
            <button aria-label="Submit" className="btn btn-primary" onClick={handleSubmit} >See Results</button>
          </div>
        </form>
      </div>
    </div>
  )
}

// implement the result on the right side of the page
function Result(props) {
  let miles = props.miles;
  let transportation = props.transportation

  return (
    <div className='container bg-light'>
      <img src="img/lightrail.png" alt="Washington State Lightrail" width="700px" />
    </div>
  )
}
