import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Data from '../data/CarbonRate.json';

export default function Calculator() {
  const [miles, setMiles] = useState('');
  const [transportation, setTransportation] = useState('Walk');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleMilesChange = (event) => {
    let inputValue = event.target.value;
    setMiles(inputValue);
    console.log(inputValue);
  };

  const handleTransportationChange = (event) => {
    let inputValue = event.target.value;
    setTransportation(inputValue);
    console.log(inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isNaN(miles) || miles.trim() === '') {
      setError('Please enter a valid number for miles. (ex. 1.1)');
      return;
    }

    setError(''); // Reset error if miles is a valid number
    console.log('submitting', miles, transportation);
    setOutput('User input value');
  };

  const result = () => {
    if (error) {
      return (
        <div>
          <h1 className='pb-2 text-center'>Result:</h1>
          <img src='img/lightrail.png' alt='Washington State Lightrail' width='600px' />
        </div>
      );
    } else if (output.length > 0) {
      return (
        <div>
          <h1 className='pb-2 text-center'>Result:</h1>
          {Data.map((item) => (
            <div className='container' key={item.transportation}>
              <img src={item.imageURL} alt={item.transportation} className='small-image bg-success bg-opacity-25 mb-2 mt-2' />
              Your carbon footprint by {item.transportation} is {Math.round(item.rate * miles)} g CO₂-eq.
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h1 className='pb-2 text-center'>Result:</h1>
          <img src='img/lightrail.png' alt='Washington State Lightrail' width='600px' />
        </div>
      );
    }
  };

  return (
    <main>
      <div className='container mt-5 mb-5'>
        <div className='row align-items-start'>
          <div className='col'>
            <h1 className='pb-2 text-center'>Check Your Carbon Emissions</h1>
            <div className='form-container'>
              <div className='form-content'>
                <form>
                  <section className='form-group'>
                    <label htmlFor='mileage'>How far are you traveling? (in Miles)</label>
                    <input type='text' id='mileage' name='mileage' className='form-control' onChange={handleMilesChange} required />
                  </section>
                  {/* Display error message if there is an error */}
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                  <div className='form-group'>
                    <label htmlFor='transportation-options'>How will you get there?</label>
                    <select
                      value={transportation}
                      id='transportation-options'
                      name='transportation-options'
                      className='form-control'
                      onChange={handleTransportationChange}
                      required
                    >
                      <option value='' disabled>
                        Select an option
                      </option>
                      {Data.map((item) => (
                        <option key={item.id} value={item.transportation}>
                          {item.transportation}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='form-group'>
                    <button aria-label='Submit' className='btn btn-primary' onClick={handleSubmit}>
                      See Results
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <p>
              Check our data source{' '}
              <a href='https://www.iea.org/data-and-statistics/charts/well-to-wheel-wake-wing-ghg-intensity-of-motorised-passenger-transport-modes-2' target='_blank'>
                here
              </a>
            </p>
          </div>
          <div className='col'>
            <div className='container bg-light'>{result()}</div>
          </div>
        </div>
      </div>
    </main>
  );
}