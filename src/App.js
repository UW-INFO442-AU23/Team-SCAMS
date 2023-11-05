import React from 'react';
import NavbarComponent from './components/Navbar.js';
import Home from './components/Home.js';
import Quiz from './components/Quiz.js';
import Calculator from './components/Calculator.js';
import ResourcePage from './components/ResourcePage.js';
// import ResourceCard from './components/ResourceCard.js';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

export default function App (props) {
    return (
        <div>
          <NavbarComponent />
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/emissions_calculator' element={<Calculator/>}/>
                <Route path='/knowledge_quiz' element={<Quiz/>}/>
                <Route path='/resources' element={<ResourcePage/>}/>
            </Routes>
          <Footer/>
        </div>
      );
}

function Footer() {
  return (
    <footer className="bg-light my-0 py-0">
      <div className="contact-info text-center">
        <p>&copy; INFO 464 Group SCAMS 2023</p>
      </div>
    </footer>
  )
}