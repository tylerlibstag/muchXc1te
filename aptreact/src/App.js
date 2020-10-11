import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'rsuite/dist/styles/rsuite-default.css';
import Landing from "./pages/Landing";
import Newsfeed from "./pages/Newsfeed";
import Search from "./pages/Search";
import LookerProfile from "./pages/LookerProfile";
import ListerProfile from "./pages/ListerProfile";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Landing" component={Landing} />
          <Route exact path="/Newsfeed" component={Newsfeed} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/LookerProfile" component={LookerProfile} />
          <Route exact path="/ListerProfile" component={ListerProfile} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;