import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/login.jsx";
import Home from "./pages/home.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
