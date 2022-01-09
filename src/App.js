import React from "react";

import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <p>
          <a href="https://github.com/tashatran/weather-react">
            Open source code, by Tasha Tran
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
