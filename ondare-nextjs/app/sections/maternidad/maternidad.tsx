import "./my.scss";
import FilteredScreenBackgroundImage from "../../components/generic/filtered_screen_background_image/filteredScreenBackgroundImage";
import TitleParagraph from "@/app/components/generic/title_paragraph/titleParagraph";

export default function Maternidad() {
  return (
    <section className="section maternidad relative">
      <div className="container m_25_auto">
        <div className="flex-2-1 items-center gap-y-5 lg:gap-y-0">
          <div className="pr-0 lg:pr-5">
            <TitleParagraph separation="100px" title="Unidad de Maternidad" paragraph={`Acompañamos a la mujer durante el embarazo, parto y postparto mediante valoración ecográfica, fisioterapia especializada y ejercicio adaptado.

Cuidar tu cuerpo durante el embarazo es el primer regalo que le haces a tu bebé. En ONDARE te acompañamos desde el inicio para que vivas esta etapa con confianza, movimiento y bienestar.`} />
          </div>
          <div className="aspect-video overflow-hidden flex items-center rounded-2xl">
            <FilteredScreenBackgroundImage imageSrc="/images/ONDARE_2.jpeg" opacity="0"/>
          </div>
        </div>
        <div className="flex-3-1 mt-50">
          <TitleParagraph separation="50px" title="Embarazo" paragraph={`El embarazo es una etapa de transformación en la que tu cuerpo cambia constantemente para adaptarse al crecimiento de tu bebé. En ONDARE te acompañamos desde el inicio mediante valoración ecográfica, fisioterapia especializada y ejercicio adaptado, para que vivas tu embarazo con confianza, movimiento y bienestar.`} />
          <TitleParagraph separation="50px" title="Valoración Inicial - Semana 12" paragraph="Valoración ecográfica y evaluación completa para diseñar tu plan personalizado durante el embarazo." />
          <TitleParagraph separation="50px" title="Segunda Valoración - Semana 30" paragraph="Revisión de tu estado físico, alivio de molestias y actualización de tu plan personalizado para acompañarte en la preparación al parto." />
          <TitleParagraph separation="50px" title="Preparación al Parto - Semana 34" paragraph={`Ofrecemos un taller de preparación al parto impartido por fisioterapeuta y matrona, diseñado para que puedas acudir junto a tu pareja.

Durante la sesión trabajaremos herramientas prácticas para afrontar el parto con confianza y seguridad, incluyendo estrategias para la fase de dilatación, masajes, respiraciones y trabajo de pujos.`} />
          <TitleParagraph separation="50px" title="Preparación Física en el Embarazo" paragraph="Sesiones grupales adaptadas a cada etapa de la gestación para mejorar tu fuerza, movilidad y bienestar." />
          <TitleParagraph separation="50px" title="Fisioterapia Durante el Embarazo" paragraph={`Tratamiento específico de las molestias más frecuentes del embarazo: dolor lumbar, dolor pélvico, molestias costales, ciática, edema y otras alteraciones musculoesqueléticas.`} />
        </div>
      </div>
    </section>
  );
}
