import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'rsuite/dist/styles/rsuite-default.css';
import Landing from "./pages/Landing";
import Newsfeed from "./pages/Newsfeed";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Landing" component={Landing} />
          <Route exact path="/Newsfeed" component={Newsfeed} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;