import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Data from '../data/CarbonRate.json';


export default function Calculator() {
  <Route path="/Calculator" element={<Calculator />} />
  const [miles, setMiles] = useState("");
  const [transportation, setTransportation] = useState("Walk");
  let [output, setOutput] = useState([]);

  // handle user input miles (num input)
  const handleMilesChange = (event) => {
    let inputValue = event.target.value;
    setMiles(inputValue)
    console.log(inputValue)
  }

  // handle user input mode of transportation (option selection)
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
      carbonEmission.push(Math.round(Data[i].rate * miles))
    }
    console.log(carbonEmission)
  }

  return (
    <main>
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <h1 className='pb-2'>Check Your Carbon Emissions</h1>
            <div className="form-container">
              <div className="form-content">
                <form>
                  <section className="form-group">
                    <label for="mileage">How far are you traveling? (in Miles)</label>
                    <input type="text" id="mileage" name="mileage" className="form-control" onChange={handleMilesChange} required />
                  </section>
                  <div className="form-group">
                    <label for="transportation-options">How will you get there?</label>
                    <select value={transportation} id="transportation-options" name="transportation-options" className="form-control" onChange={handleTransportationChange} required>
                      <option value="" disabled>Select an option</option>
                      {Data.map((item) => (
                        <option key={item.id} value={item.value}>
                          {item.transportation}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <button aria-label="Submit" className="btn btn-primary" onClick={handleSubmit} >See Results</button>
                  </div>
                </form>
              </div>
            </div>
            <p>Check our data source
              <a href="https://www.iea.org/data-and-statistics/charts/well-to-wheel-wake-wing-ghg-intensity-of-motorised-passenger-transport-modes-2" target="_blank"> here </a>
            </p>
          </div>
          <div className='col'>
            <div className='container bg-light result'>
              <img src="img/lightrail.png" alt="Washington State Lightrail" width="600px" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}