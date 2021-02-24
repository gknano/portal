import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import MainPage from "./Components/Pages/MainPage.jsx";
import TablePage from "./Components/Pages/TablePage.js";
import NoMatchPage from "./Components/Pages/NoMatchPage";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/tablepage" component={TablePage} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>
  );
}

export default App;
