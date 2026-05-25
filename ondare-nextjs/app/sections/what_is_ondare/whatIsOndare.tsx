import "./my.scss";
import SectionTitle from "../../components/generic/section_title/sectionTitle";
import Separator from "../../components/generic/separator/separator";
import TextArrow from "../../components/generic/text_arrow/textArrow";
import TitleParagraph from "../../components/generic/title_paragraph/titleParagraph";

export default function WhatIsOndare() {
  return (
    <section className="section what_is_ondare relative">
      <div className="container m_25_auto text-black">
        <SectionTitle title={"SABER MÁS"} />
        <Separator />
        <div className="
        flex flex-nowrap flex-col lg:flex-row
        mt-12.5
        w-full
        h-190 lg:h-140
        ">
          <div className="h-full w-full lg:w-[40%]">
            <TitleParagraph
            separation="100px"
            title={"¿Qué es Ondare?"} 
            paragraph={"Centro especializado en Fisioterapia del suelo pélvico, preparación al parto y rehabilitación postparto en en barrio del antiguo, Donostia / San Sebastián. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate"} />
          </div>
          <div className="
          h-fit lg:h-full w-full lg:w-[60%]
          mt-10 lg:mt-0
          flex justify-end items-end
          ">
            <TextArrow text={"CONOCER MÁS"} width="220px" />
          </div>
        </div>
        <div className="h-25"></div>
        <Separator />
      </div>
    </section>
  );
}