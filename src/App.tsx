import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {Start} from "./pages/start";
import {Login} from "./pages/login";
import {CodeVerification} from "./pages/codeVerification";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Start}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/code-verification" component={CodeVerification}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
