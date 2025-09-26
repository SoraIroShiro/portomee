import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import ProjectDetail from './components/ProjectDetail/ProjectDetail';

function App() {
  return (
  <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
