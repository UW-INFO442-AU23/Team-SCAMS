import React from 'react';
import NavbarComponent from './components/Navbar.js';
import Home from './components/Home.js';
import Quiz from './components/Quiz.js';
import Calculator from './components/Calculator.js';
import ResourcePage from './components/ResourcePage.js';
import QuizData from './data/Quiz.json'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';


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
      <NavbarComponent/>
      <div className="text-center">
        <p>&copy; INFO 442 Group SCAMS 2023</p>
      </div>
    </footer>
  )
}