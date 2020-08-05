import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Titils from "./components/Titils";
import UpoadForm from "./components/UpoadForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titils />
        <UpoadForm />
      </header>
    </div>
  );
}

export default App;
