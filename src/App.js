// Dependencies
import { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Shared components
import Header from "shared-components/Header";
import Modal from "shared-components/Modal";

// Page
import { Experiences, Home, Projects, Skills } from "./pages";

// Style
import "./App.css";

function App() {
  const [openTemporaryModal, setOpenTemporaryModal] = useState(true);

  const handleCloseModal = () => {
    setOpenTemporaryModal(false);
  };

  return (
    <Router>
      <div className="web-app" data-testid="app">
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
        <Modal displayModal={openTemporaryModal} onClose={handleCloseModal} />
      </div>
    </Router>
  );
}

export default App;
