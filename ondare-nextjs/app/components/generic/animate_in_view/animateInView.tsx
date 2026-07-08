"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import "./my.scss";

interface AnimateInViewProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function AnimateInView({ children, className = "animate-fade-in-up", stagger = false }: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? (stagger ? "animate-fade-in-up-stagger" : className) : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
