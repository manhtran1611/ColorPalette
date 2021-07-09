import React, { Component } from "react";
import "./App.css";
import { generatePalette } from "./Colorhelpers";
import Palette from "./Palette";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <div>
        <Palette {...seedColors[3]} />
      </div>
    );
  }
}

export default App;
