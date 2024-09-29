"use client";
import { ReactLenis } from "lenis/react";
import React from "react";
import Footer from "../components/footer";
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ReactLenis root>
      {children}
      <Footer />
    </ReactLenis>
  );
};

export default Layout;
