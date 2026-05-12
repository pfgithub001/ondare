"use client";

import "./my.scss";

interface SectionTitleProps {
  title: string;
  link?: string;
}

export default function SectionTitle({ title, link }: SectionTitleProps) {
  return (
    <div className="section_title mb-5">
      <h2>{title}</h2>
      {link && (
        <a href={link} className="hover-opacity">
          <span className="rotate-90">{">"}</span>
        </a>
      )}
    </div>
  );
}
