import TitleParagraph from "@/app/components/generic/title_paragraph/titleParagraph";
import "./my.scss";
import FilteredScreenBackgroundImage from "@/app/components/generic/filtered_screen_background_image/filteredScreenBackgroundImage";

export default function SueloPelvico() {
  return (
    <section className="section suelo_pelvico relative">
      <div className="container m_25_auto">
        <div className="flex-2-1 items-center gap-y-5 lg:gap-y-0">
          <div className="pr-0 lg:pr-5">
            <TitleParagraph separation="100px" title="Suelo Pélvico" paragraph="Mediante la fisioterapia trataremos las patologías derivadas del mal funcionamiento del suelo pélvico: incontinencia urinaria, descenso de órganos pélvicos (prolapsos), dolor pélvico crónico, disfunciones sexuales y patología postparto." />
          </div>
          <div className="aspect-video overflow-hidden flex items-center rounded-2xl">
            <FilteredScreenBackgroundImage imageSrc="/images/ONDARE_2.jpeg" opacity="0"/>
          </div>
        </div>
        <div className="flex-3-1 mt-50">
          <TitleParagraph separation="50px" title="Incontinencia Urinaria" paragraph="Mediante la fisioterapia trataremos las patologías derivadas del mal funcionamiento del suelo pélvico: incontinencia urinaria, descenso de órganos pélvicos (prolapsos), dolor pélvico crónico, disfunciones sexuales y patología postparto."/>          
          <TitleParagraph separation="50px" title="Incontinencia Urinaria" paragraph="Mediante la fisioterapia trataremos las patologías derivadas del mal funcionamiento del suelo pélvico: incontinencia urinaria, descenso de órganos pélvicos (prolapsos), dolor pélvico crónico, disfunciones sexuales y patología postparto."/>          
          <TitleParagraph separation="50px" title="Incontinencia Urinaria" paragraph="Mediante la fisioterapia trataremos las patologías derivadas del mal funcionamiento del suelo pélvico: incontinencia urinaria, descenso de órganos pélvicos (prolapsos), dolor pélvico crónico, disfunciones sexuales y patología postparto."/>          
        </div>
      </div>
    </section>
  );
}
