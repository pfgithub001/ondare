"use client";

import "./my.scss";

interface TitleParagraphProps {
  title: string;
  paragraph: string;
}

export default function TitleParagraph({ title, paragraph }: TitleParagraphProps) {
  return (
    <div className="title_paragraph">
      <h3 className="text-5xl">{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
}
