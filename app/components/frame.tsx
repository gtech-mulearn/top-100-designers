import React, { ReactNode } from "react";

const Frame = ({
  children,
  color = "white",
}: {
  children: ReactNode;
  color?: string;
}) => {
  return (
    <div className="border-2 border-gray- relative z-0">
      <div
        className={`bg-${color} h-4 w-4 -translate-x-1/2 -translate-y-1/2 absolute z-10 left-0 top-0`}
      ></div>
      <div
        className={`bg-${color} h-4 w-4 translate-x-1/2 -translate-y-1/2 absolute z-10 right-0 top-0`}
      ></div>
      <div
        className={`bg-${color} h-4 w-4 -translate-x-1/2 translate-y-1/2 absolute z-10 left-0 bottom-0`}
      ></div>
      <div
        className={`bg-${color} h-4 w-4 translate-x-1/2 translate-y-1/2 absolute z-10 right-0 bottom-0`}
      ></div>
      {children}
    </div>
  );
};

export default Frame;
