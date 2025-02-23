
import './App.css'

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from './components/Homepage/HomePage';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/AboutUs/AboutUs';
import RoomList from './components/RoomList/RoomList';
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/roomslist" element={<RoomList />} />
      </Routes>
    </Router>
  )
}

export default App
