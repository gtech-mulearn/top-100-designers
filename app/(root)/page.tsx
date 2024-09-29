import React from "react";
import Hero from "../components/hero";
import Landing from "../components/landing";
import About from "../components/about";
import Selection from "../components/selection";

const page = () => {
  return (
    <div>
      <Landing />
      <Hero />
      <About />
      <Selection />
    </div>
  );
};

export default page;
