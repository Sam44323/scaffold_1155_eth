import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Router from "./Router";

function App() {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;
