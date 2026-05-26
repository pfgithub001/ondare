"use client";

import "./my.scss";
import SvgLogo from "../../../svg/logo";

interface HeadLogoProps {
  width?: string;
  color?: string;
}

export default function HeadLogo({ width, color }: HeadLogoProps) {
  return (
    <div className="head_logo" style={{ width, color }}>
      <a href="/">
        <SvgLogo />
      </a>
    </div>
  );
}
