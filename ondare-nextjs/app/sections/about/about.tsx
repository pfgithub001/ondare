import "./my.scss";
import SvgLogo from "../../svg/logo";
import TitleParagraph from "@/app/components/generic/title_paragraph/titleParagraph";

export default function About() {
  return (
    <section className="section about relative min-h-screen">
      <div className="absolute inset-0 bg-black/20 z-0" />
      <div
        className="
        relative
        z-10
        min-h-screen
        flex
        flex-col
        "
      >
        <div className="m_25_auto flex-1 flex flex-col justify-center">
          <div className="w-100">
            <a href="/"><SvgLogo className="w-full" /></a>
          </div>
          <div className="flex-2-1 text-white mt-50 gap-y-30">
            <TitleParagraph separation="50px" title="¿Qué es Ondare?" paragraph="Centro especializado en Fisioterapia del suelo pélvico, preparación al parto y rehabilitación postparto en en barrio del antiguo, Donostia / San Sebastián. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate" />
            <TitleParagraph separation="50px" title="Especializados en Suelo Pélvico" paragraph="Centro especializado en Fisioterapia del suelo pélvico, preparación al parto y rehabilitación postparto en en barrio del antiguo, Donostia / San Sebastián. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate" />
          </div>          
        </div>
      </div>
    </section>
  );
}
