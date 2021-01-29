// Dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Shared components
import Header from 'shared-components/Header';

// Page
import {
  Home, Projects, Experiences, Skills
} from './pages';

// Style
import './App.css'

function App() {
  return (
    <Router>
      <div className="web-app">
        <Header />
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/experiences">
            <Experiences />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
