import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {Start} from "./pages/Start";
import {Login} from "./pages/Login";
import {CodeVerification} from "./pages/CodeVerification";
import {Index} from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/start" component={Start}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/code-verification" component={CodeVerification}/>
          <Route exact path="/" component={Index}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
