import "./my.scss";
import FilteredScreenBackgroundImage from "../../components/generic/filtered_screen_background_image/filteredScreenBackgroundImage";
import TitleParagraph from "@/app/components/generic/title_paragraph/titleParagraph";
import AnimateInView from "@/app/components/generic/animate_in_view/animateInView";

export default function SueloPelvico() {
  return (
    <section className="section suelo_pelvico relative">
      <div className="container m_25_auto">
        <AnimateInView>
        <div className="flex-2-1 items-center gap-y-5 lg:gap-y-0">
          <div className="pr-0 lg:pr-5">
            <TitleParagraph separation="100px" title="Suelo Pélvico" paragraph={`Comprender tu cuerpo para recuperar tu bienestar.

El suelo pélvico es un conjunto de músculos, fascias y ligamentos que sostienen órganos como la vejiga, el útero y el recto. Participa en funciones tan importantes como la continencia urinaria y fecal, la función sexual, la estabilidad lumbo-pélvica y el bienestar durante las diferentes etapas de la vida de la mujer.

En ONDARE realizamos una valoración ecográfica y funcional completa para identificar el origen de tus síntomas y diseñar un tratamiento adaptado a tus necesidades y objetivos.`} />
          </div>
          <div className="aspect-video overflow-hidden flex items-center rounded-2xl">
            <FilteredScreenBackgroundImage imageSrc="/images/ONDARE_2.jpeg" opacity="0"/>
          </div>
        </div>
        </AnimateInView>
        <AnimateInView stagger={true}>
        <div className="flex-3-1 mt-50">
          <TitleParagraph separation="50px" title="Incontinencia Urinaria y Prolapsos" paragraph={`Tratamiento de las alteraciones relacionadas con la continencia urinaria y el soporte de los órganos pélvicos.

· Incontinencia urinaria de esfuerzo
· Incontinencia urinaria de urgencia
· Incontinencia urinaria mixta
· Incontinencia de gases y heces
· Prolapsos`} />
          <TitleParagraph separation="50px" title="Dolor Pélvico y Disfunciones Sexuales" paragraph={`· Dolor pélvico persistente
· Dolor durante las relaciones sexuales
· Hipertonía muscular
· Vaginismo
· Dolor asociado a cicatrices
· Alteraciones de la función sexual`} />
          <TitleParagraph separation="50px" title="Valoración de Abdomen y Suelo Pélvico" paragraph={`Valoración ecográfica completa de abdomen y suelo pélvico para evaluar la función, fuerza, coordinación y comportamiento de estas estructuras durante el movimiento y las actividades del día a día.

A partir de esta valoración diseñaremos un plan de tratamiento individualizado adaptado a tus necesidades.`} />
          <TitleParagraph separation="50px" title="Menopausia" paragraph={`Disfunciones asociadas a la menopausia.
 
· Síndrome genitourinario de la menopausia
· Sequedad vaginal
· Molestias urinarias
· Incontinencia urinaria
· Prolapsos
· Dolor durante las relaciones sexuales`} />
        </div>
        </AnimateInView>
      </div>
    </section>
  );
}
