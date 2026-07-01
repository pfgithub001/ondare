"use client";

import { useRef } from "react";
import Link from "next/link";
import { useToggleOnEvent } from "@/app/hooks/use_toggle_on_event";
import SvgLogo from "@/app/svg/logo";
import "./my.scss";

export default function FloatingMenu() {
  const navRef = useToggleOnEvent<HTMLDivElement>({
    trigger: "scroll-past",
    className: "fade-in-active",
    amount: 50,
  });

  const burgerRef = useRef<HTMLDivElement | null>(null);

  useToggleOnEvent<HTMLDivElement>({
    trigger: "click",
    className: "myNavbar_active",
    targetRef: navRef,
    triggerRef: burgerRef,
  });

  return (
    <nav ref={navRef} className="myNavbar fixed top-5 right-5 z-30 fade-in">
      <div className="p-5 flex flex-col gap-5 mt-15">
        <ul className="text-lg">
          <li className="py-2"><Link href="/servicios/suelo_pelvico">Servicios</Link></li>
          <li className="py-2"><Link href="/sobre_ondare">Sobre Ondare</Link></li>
          <li className="py-2"><a href="mailto:info@ondarefisioterapia.com">Contacto</a></li>
        </ul>
        <div className="w-30 mt-5">
          <Link href="/"><SvgLogo className="w-full" /></Link>
        </div>
      </div>

      <div ref={burgerRef} className="hamburguer absolute top-2.5 right-2.5">
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
