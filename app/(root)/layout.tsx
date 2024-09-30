"use client";
import { ReactLenis } from "lenis/react";
import React from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ReactLenis root className="relative">
      <Nav />
      {children}
      <Footer />
    </ReactLenis>
  );
};

export default Layout;
