"use client";

import "./my.scss";
import FilteredScreenBackgroundImage from "../../components/generic/filtered_screen_background_image/filteredScreenBackgroundImage";
import SvgLogo from "../../svg/logo";

export default function Hero() {
  return ( 
    <section className="section hero relative">
        <FilteredScreenBackgroundImage imageSrc={"images/hero/background.jpeg"} opacity={".2"} />
        <div 
        className="
        absolute
        top-0
        left-0
        w-full
        min-h-screen
        flex
        flex-col
        justify-between
        p-12.5
        overflow-y-hidden
        ">
            <div
            className="
            flex
            flex-col
            items-end
            ">
                <SvgLogo />
            </div>
            
            <div
            className="
            text-center
            mx-auto
            w-[90%] lg:w-162.5
            ">
                <p>
                    Centro especializado en Fisioterapia del suelo pélvico, preparación al parto y rehabilitación postparto en en barrio del antiguo, Donostia / San Sebastián
                </p>
                <a 
                href="/#que-es-ondare" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("que-es-ondare")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="
                hover-opacity
                ">
                    <div
                    className="
                    mt-5
                    text-xl
                    ">
                        SABER MÁS
                    </div>
                    <div
                    className="
                    rotate-90
                    "> 
                        {">"} 
                    </div>
                </a>
            </div>
        </div>        
    </section>
  );
}