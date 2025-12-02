import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing, Home, CreatProjectPage } from "./domains";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/create-project" element={<CreatProjectPage />} />
    </Routes>
  );
};

export default App;
