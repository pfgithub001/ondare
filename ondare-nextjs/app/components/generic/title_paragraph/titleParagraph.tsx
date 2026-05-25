"use client";

import "./my.scss";

interface TitleParagraphProps {
  separation?: string;
  title: string;
  paragraph: string;
}

export default function TitleParagraph({ separation, title, paragraph }: TitleParagraphProps) {
  return (
    <div className="title_paragraph">
      <h3 className="text-5xl" style={{ marginBottom: separation }}>{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
}
