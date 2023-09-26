import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import Regester from './components/regestration';

function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <Routes>
      
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regestration" element={<Regester/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;