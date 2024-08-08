import React from "react";
import {Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LogIn from "../Pages/LogIn";
import MovieDetail from "../Pages/MovieDetail";

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
