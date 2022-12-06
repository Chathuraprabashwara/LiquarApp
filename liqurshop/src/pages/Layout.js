import React from "react";
import NavBar from "../Components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Home";
import Create from "./Create";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>  </Route>
          <Route path="/create" element={<Create />} >
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
