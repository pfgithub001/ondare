"use client";

import "./my.scss";
import FilteredScreenBackgroundImage from "../filtered_screen_background_image/filteredScreenBackgroundImage";

interface BackgroundParagraphProps {
  imageSrc: string;
  opacity: string;
  paragraph: string;
}

export default function BackgroundParagraph({ imageSrc, opacity, paragraph }: BackgroundParagraphProps) {
  return (
    <div className="background_paragraph">
      <FilteredScreenBackgroundImage imageSrc={imageSrc} opacity={opacity} />
      <div className="background_paragraph__content">
        <p 
        className="
        max-w-[90%] lg:max-w-180
        text-center
        ">{paragraph}</p>
      </div>
    </div>
  );
}
