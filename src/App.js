import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageBoders from "./components/PageBorders";

function App() {
  return (
    <div className="App">
      <Router>
        <PageBoders />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
