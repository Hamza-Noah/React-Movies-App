import React, { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import Register from "./Components/Register/Register";
import Tvshows from "./Components/Tvshows/Tvshows";
import People from "./Components/People/People";
import Notfound from "./Components/Notfound/Notfound";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tvshows" element={<Tvshows />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About/>} />
          <Route path="people" element={<People />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </>
  );
}
