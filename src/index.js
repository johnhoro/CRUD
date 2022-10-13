import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./stylesheets/style.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import EditUser from "./components/EditUser";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/edit/:username" exact>
        <EditUser />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
