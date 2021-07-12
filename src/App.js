import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./Colorhelpers";
import Palette from "./Palette";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>List goes here</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={() => <h1>Individual color goes here</h1>}
        />
      </Switch>

      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
