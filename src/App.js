import React from 'react';
import NavbarComponent from './components/Navbar.js';
import Home from './components/Home.js';
import Quiz from './components/Quiz.js';
import QuizResults from './components/Quiz.js';
import Calculator from './components/Calculator.js';
import ResourcePage from './components/ResourcePage.js';
import QuizData from './data/Quiz.json'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


export default function App(props) {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path='*' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/emissions_calculator' element={<Calculator />} />
        <Route path='/knowledge_quiz' element={<Quiz data={QuizData} />} />
        <Route path='/resources' element={<ResourcePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-light my-0 py-0 footer">
      <div className='container'>
        <div className='row align-items-end'>
          <div className='col-3'>
            <img src="logo.png" alt="go green logo" width="150" height="150" />
            <p>&copy; INFO 442 Group SCAMS 2023</p>
          </div>
          <div className='col'>
          </div>
          <div className='col-2'>
            <p className='fw-semibold my-1'>Navigation:</p>
            <p className='my-1'><Link to='/home' className='footer_link'>Home</Link></p>
            <p className='my-1'><Link to='/emissions_calculator' className='footer_link'>Calculator</Link></p>
            <p className='my-1'><Link to='/resources' className='footer_link'>Resources</Link></p>
            <p className='my-1'><Link to='/knowledge_quiz' className='footer_link'>Knowledge Quiz</Link></p>
          </div>
        </div>
      </div>

      {/* <div className="text-center">
        <p>&copy; INFO 442 Group SCAMS 2023</p>
      </div> */}
    </footer>
  )
}