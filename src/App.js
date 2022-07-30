import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './component/LandingPage';
import HomePage from './component/HomePage';
import ContactPage from './component/ContactPage';
import BootNavbar from './component/BootNavbar';


function App() {
  return (
    <BrowserRouter>
      <BootNavbar/>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
