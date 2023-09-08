import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import MainApp from "./pages/main/MainApp";
import RegisterApp from "./pages/register/RegisterApp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/register" element={<RegisterApp />} />
      </Routes>
    </div>
  );
}

export default App;
