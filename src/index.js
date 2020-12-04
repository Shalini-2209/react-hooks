import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Components/AccountType.jsx";
import Link from "./Components/Links.jsx";
import Hooks from "./Components/Hooks.jsx";

import reportWebVitals from "./reportWebVitals";
import DropDown from "./Components/DropDown.jsx";
import Toggle from "./Components/Toggle.jsx";
import CountDown from "./Components/HooksCountDown.jsx";
import ComponentA from "./Components/ComponentA.jsx";

const routes = (
  <Router>
    {" "}
    <div>
      <Switch>
        <Route path="/" exact component={Toggle} />
        <Route path="/Hooks">
          <Hooks />
        </Route>
        <Route path="/Timer">
          <CountDown />
        </Route>
        <Route path="/useContext">
          <ComponentA />
        </Route>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>{routes}</React.StrictMode>,
  document.getElementById("root")
);
// serviceWorker.unregister();
// reportWebVitals();
