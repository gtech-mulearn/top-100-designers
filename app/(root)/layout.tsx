"use client";
import Lenis from "lenis";
import React, { useEffect } from "react";
import Footer from "@/components/ui/footer";
import Nav from "@/components/ui/nav";
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="relative overflow-hidden">
      <Nav />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
