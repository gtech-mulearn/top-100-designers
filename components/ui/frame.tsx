"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

const Frame = ({
  children,
  color = "white",
  strength = 4,
  link = false,
}: {
  children: ReactNode;
  color?: string;
  strength?: number;
  link?: boolean;
}) => {
  const frameContent = (
    <div
      style={{
        borderColor: color,
      }}
      className="border-2 relative z-0"
    >
      <div
        style={{
          backgroundColor: color,
          height: `${strength * 2}px`,
          width: `${strength * 2}px`,
        }}
        className={` -translate-x-1/2 -translate-y-1/2 absolute z-10 left-0 top-0`}
      ></div>
      <div
        style={{
          backgroundColor: color,
          height: `${strength * 2}px`,
          width: `${strength * 2}px`,
        }}
        className={` translate-x-1/2 -translate-y-1/2 absolute z-10 right-0 top-0`}
      ></div>
      <div
        style={{
          backgroundColor: color,
          height: `${strength * 2}px`,
          width: `${strength * 2}px`,
        }}
        className={` -translate-x-1/2 translate-y-1/2 absolute z-10 left-0 bottom-0`}
      ></div>
      <div
        style={{
          backgroundColor: color,
          height: `${strength * 2}px`,
          width: `${strength * 2}px`,
        }}
        className={` translate-x-1/2 translate-y-1/2 absolute z-10 right-0 bottom-0`}
      ></div>
      {children}
    </div>
  );

  return link ? (
    <Link
      legacyBehavior
      href="https://airtable.com/appCAPOMQvpUnbWeb/pag5vZ1xppQFb3rPW/form"
      passHref
    >
      <a>{frameContent}</a>
    </Link>
  ) : (
    frameContent
  );
};

export default Frame;
