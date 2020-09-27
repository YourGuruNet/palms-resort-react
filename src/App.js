import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Default from './components/Default';
import Home from './components/pages/Home';
//import styled from 'styled-components';
import Navbar from "./components/navbar/Navbar";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/services" component={Services} />
        <Route path="/signup" component={SignUp} />
        <Route component={Default} />
      </Switch>
      </Router>
    </>
  );
}
export default App;


