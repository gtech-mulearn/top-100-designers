import React from "react";
import Hero from "@/components/ui/hero";
import Landing from "@/components/ui/landing";
import About from "@/components/ui/about";
import Selection from "@/components/ui/selection";
import Faq from "@/components/ui/faq";
const page = () => {
  return (
    <div>
      <Landing />
      <Hero />
      <About />
      <Selection />
      <Faq />
    </div>
  );
};

export default page;
