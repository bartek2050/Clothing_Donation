import React from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/logowanie"} component={Login}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
