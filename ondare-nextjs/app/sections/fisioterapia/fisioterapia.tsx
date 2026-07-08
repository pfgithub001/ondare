import TitleParagraph from "@/app/components/generic/title_paragraph/titleParagraph";
import "./my.scss";
import FilteredScreenBackgroundImage from "@/app/components/generic/filtered_screen_background_image/filteredScreenBackgroundImage";
import AnimateInView from "@/app/components/generic/animate_in_view/animateInView";

export default function Fisioterapia() {
  return (
    <section className="section fisioterapia relative">
      <div className="container m_25_auto">
        <AnimateInView>
        <div className="flex-2-1 items-center gap-y-5 lg:gap-y-0">
          <div className="pr-0 lg:pr-5">
            <TitleParagraph separation="100px" title="Fisioterapia" paragraph="Recuperar el movimiento, aliviar el dolor y mejorar tu calidad de vida.
            En ONDARE abordamos cada lesión y cada dolor de forma individualizada, buscando no solo aliviar los síntomas, sino identificar su origen y ayudarte a recuperar tu funcionalidad." />
          </div>
          <div className="aspect-video overflow-hidden flex items-center rounded-2xl">
            <FilteredScreenBackgroundImage imageSrc="/images/ONDARE_2.jpeg" opacity="0"/>
          </div>
        </div>
        </AnimateInView>
        <AnimateInView stagger={true}>
        <div className="flex-3-1 mt-50">
          <TitleParagraph separation="50px" title="Dolor de Espalda y Cuello" paragraph={`Tratamiento de las alteraciones musculoesqueléticas relacionadas con la columna vertebral.
          
          · Cervicalgia
          · Dorsalgia 
          · Lumbalgia
          · Hernias y protrusiones discales
           · Dolor asociado a la postura`}/>          
          <TitleParagraph separation="50px" title="Lesiones Deportivas" paragraph={`Tratamiento y recuperación de lesiones derivadas de la práctica deportiva.
          
          · Lesiones musculares
          · Tendinopatías
          · Esguinces
          · Sobrecargas
          · Recuperación funcional y vuelta al deporte`}/>
          <TitleParagraph separation="50px" title="Rehabilitación y Recuperación Funcional" paragraph="Programas individualizados para recuperar movilidad, fuerza y funcionalidad tras una lesión, cirugía o periodo de inactividad."/>
      
      
        </div>
        </AnimateInView>
      </div>
    </section>
  );
}
