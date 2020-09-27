import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import "./app.scss";

import PokemonListPage from "./view/pages/PokemonListPage";
import PokemonDetailCardPage from "./view/pages/PokemonDetailCardPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path="/"
          render={({ location }) => {
            const queries = location.search
              .slice(1)
              .split("&")
              .reduce((acc, queryParam) => {
                const [key, value] = queryParam.split("=");
                return {
                  ...acc,
                  [key]: value,
                };
              }, {});
            return <PokemonListPage {...queries} />;
          }}
        />
        <Route
          exact={true}
          path="/:name"
          render={({ match }) => (
            <PokemonDetailCardPage name={match.params.name} />
          )}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
