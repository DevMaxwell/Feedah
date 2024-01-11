import React from "react";
import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cuisine from "./Cuisine";
import LandingPage from "./LandingPage";
import Searched from "./Searched";
import Recipe from "./Recipe";

function Pages() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/cuisine' element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path='/search/:search' element={<Searched />} />
      <Route path='/recipe/:name' element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
