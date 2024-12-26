import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Outletnav from "./Components/Outletnav";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Outletnav/>}>
        <Route  path="/" element={<Home />} />
        <Route  path="/project" element={<Project />} />
        <Route  path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

