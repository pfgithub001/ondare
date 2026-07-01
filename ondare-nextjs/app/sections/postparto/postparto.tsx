import "./my.scss";
import FilteredScreenBackgroundImage from "../../components/generic/filtered_screen_background_image/filteredScreenBackgroundImage";
import TitleParagraph from "@/app/components/generic/title_paragraph/titleParagraph";

export default function Postparto() {
  return (
    <section className="section postparto relative">
      <div className="container m_25_auto">
        <div className="flex-2-1 items-center gap-y-5 lg:gap-y-0">
          <div className="pr-0 lg:pr-5">
            <TitleParagraph separation="100px" title="Postparto" paragraph={`Recuperar tu cuerpo después del parto.

El postparto es una etapa de recuperación y adaptación. En ONDARE te ayudamos a recuperar tu función abdominal y perineal, volver al ejercicio de forma segura y comprender los cambios que ha experimentado tu cuerpo para que recuperes confianza en cada etapa de tu recuperación.`} />
          </div>
          <div className="aspect-video overflow-hidden flex items-center rounded-2xl">
            <FilteredScreenBackgroundImage imageSrc="/images/ONDARE_2.jpeg" opacity="0"/>
          </div>
        </div>
        <div className="flex-3-1 mt-50">
          <TitleParagraph separation="50px" title="Valoración Postparto - A partir de la cuarentena" paragraph="Valoración ecográfica completa postparto para evaluar el estado de tu abdomen, suelo pélvico y recuperación funcional, permitiéndonos diseñar un plan individualizado adaptado a tus necesidades y objetivos." />
          <TitleParagraph separation="50px" title="Tratamiento Individual" paragraph={`Tratamiento específico de las principales alteraciones que pueden aparecer tras el parto:

- Diástasis abdominal
- Cicatrices de cesárea o episiotomía
- Disfunciones del suelo pélvico
- Incontinencia urinaria
- Sensación de pesadez o prolapso
- Dolor pélvico y abdominal`} />
          <TitleParagraph separation="50px" title="Rehabilitación Abdominal y Suelo Pélvico" paragraph="Sesiones individuales en gimnasio orientadas a recuperar la función abdominal y perineal mediante ejercicio terapéutico adaptado a cada mujer." />
          <TitleParagraph separation="50px" title="Programa Postparto de 3 Meses" paragraph={`Trabajo grupal y progresivo de recuperación funcional y vuelta al impacto.

Un programa diseñado para acompañaros en el postparto, recuperando fuerza, estabilidad, control abdominal y confianza en el movimiento de forma progresiva y segura.`} />
          <TitleParagraph separation="50px" title="Clases Postparto" paragraph="Sesiones grupales enfocadas en la recuperación física tras el parto, combinando ejercicio terapéutico, fuerza y trabajo específico de suelo pélvico y abdomen." />
        </div>
      </div>
    </section>
  );
}
