"use client";

import "./my.scss";

interface SeparatorProps {
  color?: string;
}

export default function Separator({ color }: SeparatorProps) {
  return <div className="separator" style={{ backgroundColor: color }} />;
}
