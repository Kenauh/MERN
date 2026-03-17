import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../components/Landing';
import Cities from '../components/cities';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/cities" element={<Cities />} />
    </Routes>
  );
}

export default App;