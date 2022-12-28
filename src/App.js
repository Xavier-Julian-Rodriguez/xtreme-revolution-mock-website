import './App.css';
import Homepage from './components/HomePage/homePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
  )
}

export default App;
