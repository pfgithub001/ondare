"use client";

import React from "react";
import "./my.scss";

interface BorderedRowProps {
  children: React.ReactNode;
  gap?: string;
}

export default function BorderedRow({ children, gap = "0px" }: BorderedRowProps) {
  return (
    <div className="bordered_row w-full">
      {React.Children.map(children, (child, index) => (
        <div 
          key={index} 
          className="bordered_row__item"
          style={{ paddingLeft: gap }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}