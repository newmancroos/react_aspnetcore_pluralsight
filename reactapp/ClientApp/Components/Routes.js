import React from "react";
import { Switch, Route } from "react-router";
//import {Route} from 'react-router-dom';
import Home from "./home/Home";
import Speakers from "./Speakers/Speakers";
import Login from "./common/Login";
import SpeakerDetail from "./Speakers/SpeakerDetail";

// tom-becker-8575

export default () => {
  return (
    <div>
      <Switch>
        <Route path="/speakers/:name" component={SpeakerDetail} />
        <Route exact path="/speakers" component={Speakers} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};
