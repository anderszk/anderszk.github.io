import * as React from "react";

import { useState } from "react";
import { Header } from "./sections/Header/Header";
import { AboutUs } from "./sections/AboutUs/AboutUs";
import { Technologies } from "./sections/Technologies/Technologies";
import { Experience } from "./sections/Experience/Experience";

import { Navbar } from "../src/components/Navbar/Navbar";
import { ToTopButton } from "./components/ToTopButton/ToTopButton";

import "./App.css";
import { Portofolio } from "./sections/Portofolio/Portofolio";

function App() {
  const sections = [
    { id: "about", label: "About Us" },
    { id: "experience", label: "Experience" },
    { id: "portfolio", label: "Portfolio" },
    { id: "technologies", label: "Technologies" },
  ];

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  return (
    <>
      <Navbar sections={sections} currentSectionIndex={currentSectionIndex} />
      <main>
        <Header />
        <AboutUs />
        <Technologies />
        <Experience />
        <Portofolio />
      </main>
      <ToTopButton />
    </>
  );
}

export default App;
