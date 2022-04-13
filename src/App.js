import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Share/Footer/Footer";
import Heaser from "./Pages/Share/Header/Heaser";

const App = () => {
  return (
    <div>
      <Heaser></Heaser>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
