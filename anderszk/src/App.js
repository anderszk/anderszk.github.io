import * as React from "react";

import { Header } from "./sections/Header/Header";
import { AboutUs } from "./sections/AboutUs/AboutUs";
import { Technologies } from "./sections/Technologies/Technologies";
import { Experience } from "./sections/Experience/Experience";

import { Navbar } from "../src/components/Navbar/Navbar";
import { ToTopButton } from "./components/ToTopButton/ToTopButton";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <AboutUs />
        <Technologies />
        <Experience />
      </main>
      <ToTopButton />
    </>
  );
}

export default App;
