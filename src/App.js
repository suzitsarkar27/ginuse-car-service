import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Reagister from "./Pages/Reagister/Reagister";
import ServiceDatalic from "./Pages/ServiceDatalic/ServiceDatalic";
import Footer from "./Pages/Share/Footer/Footer";
import Heaser from "./Pages/Share/Header/Heaser";
import NotFound from "./Pages/Share/NotFound/NotFound";

const App = () => {
  return (
    <div>
      <Heaser></Heaser>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDatalic></ServiceDatalic>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/reagister" element={<Reagister></Reagister>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
