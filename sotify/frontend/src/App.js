import styles from './App.module.css'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Registration from './components/Pages/Registration/Registration';
import Unexpage from './components/Pages/Unexpage/Unexpage';
import Login from './components/Pages/Login/Login';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration/" element={<Registration />} />
        <Route path="/login/" element={<Login />} />
        <Route path="*" element={<Unexpage />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;

