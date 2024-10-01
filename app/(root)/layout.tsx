"use client";
import { ReactLenis } from "lenis/react";
import React, { useEffect } from "react";
import Footer from "@/components/ui/footer";
import Nav from "@/components/ui/nav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
  }, []);
  return (
    <ReactLenis root className="relative">
      <Nav />
      {children}
      <Footer />
    </ReactLenis>
  );
};

export default Layout;
