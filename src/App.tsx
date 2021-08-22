import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {Start} from "./pages/start";
import {Login} from "./pages/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Start}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
