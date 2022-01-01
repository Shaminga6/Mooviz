import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Kids from "./components/Kids";
import Drama from "./components/drama";
import Science from "./components/science";
import Popular from "./components/popular";
import Info from "./components/Info"

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Navigate to="/" />}/>
      <Route path="/kids" element={<Kids />} />
      <Route path="/drama" element={<Drama />} />
      <Route path="/science" element={<Science />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
