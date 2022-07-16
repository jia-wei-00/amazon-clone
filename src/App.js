import React from "react";
import "./App.css";
import Header from "./Header/Header.js";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
