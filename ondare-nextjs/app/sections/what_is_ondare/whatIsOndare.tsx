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
            paragraph={`Ondare es un centro de Fisioterapia y espacio dedicado a la salud integral de la mujer en el barrio del Antiguo en Donostia.

Acompañamos a la mujer en cada etapa de su vida mediante una combinación de fisioterapia especializada, valoración ecográfica y ejercicio terapéutico.Desde el embarazo hasta el postparto, pasando por las disfunciones del suelo pélvico y la menopausia, nuestro objetivo es ayudarte a comprender tu cuerpo, recuperar tu bienestar y sentirte fuerte en cada momento de tu vida.

Además, contamos con un área especializada en el tratamiento de las disfunciones del suelo pélvico masculino.Creemos en una atención individualizada, basada en la evidencia científica y centrada en las necesidades de cada mujer.
¿Cómo podemos ayudarte? `} />
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