import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Data from '../data/CarbonRate.json';


export default function Calculator (props) {
    <Route path="/Calculator" element={<Calculator/>} />
    // const [inputValue, setInputValue] = useState([]);
    
    return (
      <main>
          <div className="container">
              <h1>Check Your Carbon Emissions</h1>
              <div className="form-container">
                  <div className="form-content">
                      <form action="CalculatorResult.html" method="post">
                          <div className="form-group">
                              <label for="mileage">How far are you traveling? (in Miles)</label>
                              <input type="text" id="mileage" name="mileage" className="form-control" required />
                          </div>
                          
                          <div className="form-group">
                              <label for="transportation-options">How will you get there?</label>
                              <select id="transportation-options" name="transportation-options" className="form-control" required>
                                  <option value="Car">Car</option>
                                  <option value="Carpool">Carpool with one or more people</option>
                                  <option value="Bus">Bus</option>
                                  <option value="Walk">Walk</option>
                                  <option value="Bike">Bike</option>
                                  <option value="Lightrail">Lightrail (Electricity)</option>
                                  <option value="Train">Train (Diesel)</option>
                                  <option value="Plane">Plane</option>
                              </select>
                          </div>
  
                          <div className="form-group">
                              <button aria-label="Submit" className="btn btn-primary" type="submit">See Results</button>
                          </div>
                      </form>
                  </div>
                  <div>
                      <img src="#" alt="#" width="200"/>
                  </div>
              </div>
          </div>
      </main>
    )
}

/*
// implement calculating feature here
function calculating (props) {
  let setCalculatingCallback = props.setCalculatingCallback
  const [inputValue, setInputValue] = useState("")

  const handleChange = (event) => {
    let inputValue = event.target.value;
    setInputValue(inputValue)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting", inputValue);
    calculatingCallback()
    setInputValue("") //empty the input
  }
}

function CalculatingCallback() {

}
*/