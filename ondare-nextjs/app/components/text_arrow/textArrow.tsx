"use client";

import "./my.scss";

interface TextArrowProps {
  text: string;
  width?: string;
}

export default function TextArrow({ text, width }: TextArrowProps) {
  return (
    <div className="text_arrow w-full" style={{ width }}>
      <span>{text}</span>
      <div className="flex items-center m-0 p-0 gap-0"><div className="text_arrow__body m-0" /><span className="text_arrow__head m-0">{">"}</span></div>
    </div>
  );
}
