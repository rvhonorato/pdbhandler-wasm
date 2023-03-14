import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <button
        onClick={() => {
          alert(`Result from WebAssembly: ${window.myGolangFunction(2, 3)}`);
        }}
      >
        Click here to invoke WebAssembly
      </button>
    </div>
  );
}

export default App;
