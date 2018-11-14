import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import MenuSelection from "./components/MenuSelection";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul id="nav">
            <Header />
            <li className="page">
              <Link to="/">Home </Link>
            </li>
            <li className="page">
              <Link to="/menu">Menu </Link>
            </li>
            <li className="page">
              <Link to="/about">About </Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/menu" component={MenuSelection} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
