import React from "react";

import Info from "../Components/Info";
import About from "../Components/About";
import HeroSection from "../Components/HeroSection";

export default function AboutPage() {
  return (
    <>
      <HeroSection title="About us" />
      <Info />
      <About />
    </>
  );
}
