import React, { Component } from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Hooks from "./Components/Hooks.jsx";
import reportWebVitals from "./reportWebVitals";
import DropDown from "./Components/DropDown.jsx";
import Toggle from "./Components/Toggle.jsx";
import CountDown from "./Components/HooksCountDown.jsx";
import ComponentA from "./Components/ComponentA.jsx";
import Component1 from "./Components/Component1.jsx";
import Counter from "./Components/Counter.jsx";
import CounterTwo from "./Components/CounterTwo.jsx";
import CounterThree from "./Components/CounterThree.jsx";
import Parent from "./Components2/Parent.jsx";
import Memo from "./Components2/MemoHook.jsx";
import Focus from "./Components2/FocusInput.jsx";
import Timer from "./Components2/HookTimer.jsx";
import DocTitleOne from "./Components2/DocTitleOne.jsx";
import CounterOne from "./Components2/CounterOne.jsx";

const routes = (
  <Router>
    {" "}
    <div>
      <Switch>
        <Route path="/" exact component={Toggle} />
        <Route path="/Hooks">
          <Hooks />
        </Route>
        <Route path="/Custom">
          <CounterOne />
        </Route>
        <Route path="/Timer">
          <CountDown />
        </Route>
        <Route path="/DocTitle">
          <DocTitleOne />
        </Route>
        <Route path="/FocusOnLoad">
          {/* <Focus /> */}
          <Timer />
        </Route>
        <Route path="/useContext">
          {/* <ComponentA /> */}
          <Component1 />
        </Route>
        <Route path="/useReducer">
          {/* <Counter /> */}
          {/* <CounterTwo /> */}
          <CounterThree />
        </Route>
        <Route path="/useCallBack">
          {/* <Parent /> -------useCallBack */}
          <Memo />
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
