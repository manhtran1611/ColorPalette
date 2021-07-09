import React, { Component } from "react";
import "./App.css";
import { generatePalette } from "./Colorhelpers";
import Palette from "./Palette";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
