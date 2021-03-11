import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import {Router,Route,Switch} from 'react-router-dom';
import Decks from "./decks/Decks.js";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
        <Route exact={true} path="/">
          <Decks />
        </Route>
        <Route>
          <NotFound />
        </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
