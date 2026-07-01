import "./my.scss";
import FilteredScreenBackgroundImage from "../../components/generic/filtered_screen_background_image/filteredScreenBackgroundImage";
import TitleParagraph from "@/app/components/generic/title_paragraph/titleParagraph";

export default function EntrenamientoMujer() {
  return (
    <section className="section entrenamiento_mujer relative">
      <div className="container m_25_auto">
        <div className="flex-2-1 items-center gap-y-5 lg:gap-y-0">
          <div className="pr-0 lg:pr-5">
            <TitleParagraph separation="100px" title="Entrenamiento en la Mujer" paragraph={`Movimiento, fuerza y salud en cada etapa de tu vida.

En ONDARE entendemos el ejercicio como una herramienta fundamental para la salud de la mujer. Nuestro objetivo es ayudarte a sentirte fuerte, capaz y segura mediante programas adaptados a cada etapa vital.

Primero realizamos una valoración de abdomen y suelo pélvico para poder poner un punto de partida y ser más específicos en tu progresión.`} />
          </div>
          <div className="aspect-video overflow-hidden flex items-center rounded-2xl">
            <FilteredScreenBackgroundImage imageSrc="/images/ONDARE_2.jpeg" opacity="0"/>
          </div>
        </div>
        <div className="flex-3-1 mt-50">
          <TitleParagraph separation="50px" title="Preparación Física en el Embarazo" paragraph={`El ejercicio durante el embarazo aporta beneficios tanto para la madre como para el bebé.

Nuestras sesiones están diseñadas para ayudarte a mantenerte activa durante la gestación, mejorar tu fuerza, movilidad y resistencia, aliviar molestias y llegar al parto en las mejores condiciones posibles.`} />
          <TitleParagraph separation="50px" title="Programa Postparto" paragraph={`Trabajo grupal y progresivo de recuperación funcional y vuelta al impacto.

Un programa diseñado para acompañarte tras el parto, recuperando fuerza, estabilidad, control abdominal y confianza en el movimiento de forma progresiva y segura.`} />
          <TitleParagraph separation="50px" title="Ejercicio de Fuerza en la Menopausia" paragraph={`La fuerza es una herramienta clave para mantener la salud muscular, ósea y metabólica durante la menopausia.

Nuestras sesiones están orientadas a mejorar la funcionalidad, prevenir lesiones y favorecer una mejor calidad de vida.`} />
          <TitleParagraph separation="50px" title="Entrenamiento Individualizado" paragraph="Programas adaptados a cada mujer y a sus objetivos. Si tienes dolor, si tienes un embarazo de riesgo, si no has entrenado nunca o simplemente quieres un entrenamiento más individualizado esta opción es para ti." />
        </div>
      </div>
    </section>
  );
}
