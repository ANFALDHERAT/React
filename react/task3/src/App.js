import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Regester from './components/regestration';

function App() {
  return (
    <Router>
      <div>
      

        <Routes>
      
          <Route path="/regestration" element={<Regester/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;