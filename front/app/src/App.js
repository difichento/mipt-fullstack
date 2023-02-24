import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main.js"
import LoginPage from './pages/Login';
import RegPage from './pages/Reg';

import './base.css';
import './reset.css'
import './fonts/Inter/stylesheet.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="reg" element={<RegPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App