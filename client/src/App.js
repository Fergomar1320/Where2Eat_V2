/*
Main code. Router is used to navigate between pages.
*/

import './App.css';
import React from 'react';
import {  BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RestaurantPage from './pages/RestaurantPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() { 
  return (
    <BrowserRouter>
      <Routes>
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
    />
        <Route path="/main" element={<RestaurantPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
