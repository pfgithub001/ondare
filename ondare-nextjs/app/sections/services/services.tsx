import TitleParagraph from "@/app/components/generic/title_paragraph/titleParagraph";
import "./my.scss";
import Separator from "@/app/components/generic/separator/separator";
import SectionTitle from "@/app/components/generic/section_title/sectionTitle";
import TextArrow from "@/app/components/generic/text_arrow/textArrow";
import AnimateInView from "@/app/components/generic/animate_in_view/animateInView";

export default function Services() {
  return ( 
    <section className="section services relative">
        <div className="container m_25_auto">
          <SectionTitle title={"SERVICIOS"} />
          <AnimateInView stagger={true}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-25 gap-x-7.5 gap-y-7.5">
              <div className="">
                <div className="min-h-auto md:min-h-100 lg:min-h-150"><TitleParagraph separation="30px" title="Fisioterapia" paragraph="Tratamiento individualizado de lesiones musculoesqueléticas, dolor y alteraciones funcionales mediante terapia manual, ejercicio terapéutico y abordaje basado en la evidencia científica." /></div>
                <div className="h-10"></div>                
                <a href="/servicios/fisioterapia"><TextArrow text={"CONOCER MÁS"} width="200px" /></a>
              </div>
              <div className="">
                <div className="min-h-auto md:min-h-100 lg:min-h-150"><TitleParagraph separation="30px" title="Unidad de suelo pélvico" paragraph={`Acompañamos tanto a mujeres como hombres a recuperar su salud íntima

                · Incontinencia urinaria, fecal o de gases
                · Prolapso de órganos pélvicos
                · Dolor pélvico crónico
                · Dolor en las relaciones sexuales
                · Tratamiento de cicatrices`} /></div>
                <div className="h-10"></div>
                <a href="/servicios/suelo_pelvico"><TextArrow text={"CONOCER MÁS"} width="200px" /></a>
              </div>
              <div className="">
                <div className="min-h-auto md:min-h-100 lg:min-h-150"><TitleParagraph separation="30px" title="Unidad de maternidad" paragraph="Acompañamiento especializado durante el embarazo mediante valoración ecográfica, fisioterapia y ejercicio terapéutico adaptado a cada etapa de la gestación. Recuperación abdominal y del suelo pélvico tras el parto mediante valoración ecográfica, tratamiento individual y ejercicio terapéutico específico" /></div>
                <div className="h-10"></div>
                <a href="/servicios/maternidad"><TextArrow text={"CONOCER MÁS"} width="200px" /></a>
              </div>
               <div className="">
                 <div className="min-h-auto md:min-h-100 lg:min-h-150"><TitleParagraph separation="30px" title="Postparto" paragraph="Recuperar tu cuerpo después del parto. En ONDARE te ayudamos a recuperar tu función abdominal y perineal, volver al ejercicio de forma segura y comprender los cambios que ha experimentado tu cuerpo para que recuperes confianza en cada etapa de tu recuperación." /></div>
                 <div className="h-10"></div>
                 <a href="/servicios/postparto"><TextArrow text={"CONOCER MÁS"} width="200px" /></a>
               </div>
               <div className="">
                 <div className="min-h-auto md:min-h-100 lg:min-h-150"><TitleParagraph separation="30px" title="Entrenamiento en la mujer" paragraph="Contamos con clases específicas para cada etapa de tu vida; embarazo, postparto, menopausia.  Fortalece tu cuerpo y mejora tu salud de forma consciente y segura. Primero realizamos una valoración de abdomen y suelo pélvico y así poder poner un punto de partida y ser más específicos en tu progresión." /></div>
                 <div className="h-10"></div>
                 <a href="/servicios/entrenamiento_mujer"><TextArrow text={"CONOCER MÁS"} width="200px" /></a>
               </div>
               <div className="">
                 <div className="min-h-auto md:min-h-100 lg:min-h-150"><TitleParagraph separation="30px" title="Unidad oncología y drenaje linfático manual" paragraph="Acompañamiento especializado durante el tratamiento y recuperación oncológica mediante fisioterapia oncológica, drenaje linfático manual y ejercicio terapéutico adaptado a cada etapa del proceso." /></div>
                 <div className="h-10"></div>
                 <a href="/servicios/oncologia"><TextArrow text={"CONOCER MÁS"} width="200px" /></a>
            </div>
          </div>
           </AnimateInView>
         </div>       
    </section>
  );
}