import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
    </Router>
  );
}

export default App;
