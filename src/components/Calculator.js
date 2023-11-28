import React, { useState } from 'react';
import Data from '../data/CarbonRate.json';

export default function Calculator() {
  const [miles, setMiles] = useState('');
  const [transportation, setTransportation] = useState('Walking');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleMilesChange = (event) => {
    let inputValue = event.target.value;
    setMiles(inputValue);
    setOutput('');
  };

  const handleTransportationChange = (event) => {
    let inputValue = event.target.value;
    setTransportation(inputValue);
    setOutput('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isNaN(miles) || miles.trim() === '') {
      setError('Please enter a valid number for miles. (ex. 1.1)');
      return;
    }

    setError('');
    setOutput('User input value');
  };

  const result = () => {
    if (error) {
      return (
        <div>
          <img src='img/lightrail.png' alt='Washington State Lightrail' width='100%' />
        </div>
      );
    } else if (output.length > 0) {
      const selectedTransportation = Data.find((item) => item.transportation === transportation);
      let otherTransportations = Data.filter((item) => item.transportation !== transportation);
      if (miles > 1.5) {
        otherTransportations = otherTransportations.filter((item) => item.transportation !== 'Walking');
      }
      if (miles < 100) {
        otherTransportations = otherTransportations.filter((item) => item.transportation !== 'Plane');
      }
      if (miles < 3) {
        otherTransportations = otherTransportations.filter(
          (item) => item.transportation !== 'Car' && item.transportation !== 'Carpool' && item.transportation !== 'Train (Diesel)'
        );
      }
      if (miles > 50) {
        otherTransportations = otherTransportations.filter(
          (item) => item.transportation !== 'Lightrail (Electricity)' && item.transportation !== 'Bus' && item.transportation !== 'Biking'
        );
      }

      return (
        <div>
          <h1 className='pb-2 text-center result-headers'>Result</h1>
          <p className='text-center bg-warning bg-opacity-25'>
            You chose to travel {miles} miles by {transportation}.
          </p>
          <h2 className='text-center result-headers'>Your Planned Trip:</h2>
          {selectedTransportation && (
            <div className='container bg-success bg-opacity-50'>
              <div className='row align-items-center'>
                <div className='col-12 col-md-auto'>
                  <img
                    src={selectedTransportation.imageURL}
                    alt={selectedTransportation.transportation}
                    className='small-image bg-success bg-opacity-25 mb-2 mt-2'
                    style={{ maxWidth: '100%' }}
                  />
                </div>
                <div className='col-12 col-md-auto text-white'>
                  <p>
                    Your carbon footprint by {selectedTransportation.transportation} is {Math.round(selectedTransportation.rate * miles)} g CO₂-eq.
                  </p>
                </div>
              </div>
            </div>
          )}

          <h2 className='text-center result-headers'>Other Travel Options:</h2>
          {otherTransportations.map((item) => (
            <div className='container' key={item.transportation}>
              <div className='row align-items-center'>
                <div className='col-12 col-md-auto'>
                  <img src={item.imageURL} alt={item.transportation} className='small-image bg-success bg-opacity-25 mb-2 mt-2' style={{ maxWidth: '100%' }} />
                </div>
                <div className='col-12 col-md-auto'>
                  <p>
                    Your carbon footprint by {item.transportation} is {Math.round(item.rate * miles)} g CO₂-eq.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <img src='img/lightrail.png' alt='Washington State Lightrail' width='100%' />
        </div>
      );
    }
  };

  return (
    <main>
      <div className='container mt-5 mb-5'>
        <div className='row align-items-start'>
          <div className='col-12 col-md-6'>
            <h1 className='pb-2 text-left'>Check Your Carbon Emissions</h1>
            <div className='form-container'>
              <p>
                According to the <a href="https://www.mozilla.org/en-US/">EPA</a>,
                "the average passenger vehicle emits about 400 grams of CO2 per mile," which can lead to "4.6 metric tons of
                carbon dioxide" per year. <strong>Our goal</strong> is to urge you to utilize modes of transportation that have a <strong>CO2-eq as close to 0 g as possible.</strong>
              </p>
              <div className='form-content'>
                <form>
                  <section className='form-group'>
                    <strong>
                      <label htmlFor='mileage'>How far are you traveling? (in Miles)</label>
                    </strong>
                    <input type='text' id='mileage' name='mileage' className='form-control' onChange={handleMilesChange} required />
                  </section>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                  <div className='form-group'>
                    <strong>
                      <label htmlFor='transportation-options'>How will you get there?</label>
                    </strong>
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
                here.
              </a>
            </p>
          </div>
          <div className='col-12 col-md-6'>
            <div className='container bg-light'>{result()}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
