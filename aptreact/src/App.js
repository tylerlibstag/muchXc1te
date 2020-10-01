import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
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
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/Login" component={Login} />
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