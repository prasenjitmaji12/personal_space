import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './About';
import Home from './Home';

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About}/>
        </Switch>
    </Router>
  );
}
