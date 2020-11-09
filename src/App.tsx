import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import NavBar from "src/elements/NavBar";
import { Header } from "src/components/Header";
import { Hero } from "src/components/Hero";
import { NextStation } from "src/components/NextStation";
import { TramWith } from "src/components/TramWith";
import { DoorsAreClosing } from "src/components/DoorsAreClosing";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <NextStation />
      <TramWith />
      <DoorsAreClosing />
    </div>
  );
}

export default App;
