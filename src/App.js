import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Image from "./image/image";
import Checkboxes from "./checkboxes/checkboxes";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/image" component={Image} />
          <Route path="/checkboxes" component={Checkboxes} />
        </Switch>
      </Router>
    </div>
  );
}
