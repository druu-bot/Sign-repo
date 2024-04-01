import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"; // Import the NavBar component
import Baseline from "./pages/Baseline";
import WordGame from "./pages/WordGame"; // Import the WordGame component

function App() {
  return (
    <>
      <NavBar /> {/* Include the NavBar component */}
      <Switch>
        <Route exact path="/baseline" component={Baseline} />
        <Route exact path="/wordgame" component={WordGame} /> {/* Route for WordGame */}
        <Redirect from="/" exact to="/wordgame" />
        <Route render={() => <Redirect to="/wordgame" />} />
      </Switch>
    </>
  );
}

export default App;
