import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Restaurant from "./components/Restaurant";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
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
              <Link to="/restaurant">Restaurant </Link>
            </li>
            <li className="page">
              <Link to="/about">About </Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
