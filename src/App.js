import React, { useState } from 'react';
import NavbarComponent from './components/Navbar.js';
import Home from './components/Home.js';
import Quiz from './components/Quiz.js';
import QuizResults from './components/QuizResults.js';
import Calculator from './components/Calculator.js';
import ResourcePage from './components/ResourcePage.js';
import QuizData from './data/Quiz.json'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


export default function App(props) {
  const [userAnswer, setUserAnswer] = useState(null);
  const handleSubmit = (answers) => {
    setUserAnswer(answers)
  };
  
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path='*' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/emissions_calculator' element={<Calculator />} />
        <Route path='/knowledge_quiz' element={<Quiz data={QuizData} onSubmit={handleSubmit}/>} />
        <Route path='/knowledge_quiz_results' element={<QuizResults QuizData={QuizData} answers={userAnswer} onSubmit={handleSubmit}/>} />
        <Route path='/resources' element={<ResourcePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-light my-0 py-0 footer feature-section">
      <div className='container footer_container'>
          <div className='col-lg-3 col-sm-3 footer_logo'>
            <img src="logo.png" alt="go green logo" width="113" height="56"/>
            <p>&copy; INFO 442 Group SCAMS 2023</p>
          </div>
      </div>
    </footer>
  )
}
