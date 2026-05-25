import TitleParagraph from "@/app/components/generic/title_paragraph/titleParagraph";
import "./my.scss";
import Separator from "@/app/components/generic/separator/separator";
import SectionTitle from "@/app/components/generic/section_title/sectionTitle";
import TextArrow from "@/app/components/generic/text_arrow/textArrow";

export default function Services() {
  return ( 
    <section className="section services relative">
        <div className="container m_25_auto">
          <SectionTitle title={"SERVICIOS"} />
          <div className="inner-border-separation mt-25">
              <div className="">
                <div className="min-h-auto md:min-h-100 lg:min-h-150"><TitleParagraph separation="30px" title="Suelo Pélvico" paragraph="Mediante la fisioterapia trataremos las patologías derivadas del mal funcionamiento del suelo pélvico: incontinencia urinaria, descenso de órganos pélvicos (prolapsos), dolor pélvico crónico, disfunciones sexuales y patología postparto." /></div>
                <div className="h-10"></div>
                <TextArrow text={"CONOCER MÁS"} width="200px" />
              </div>
              <div className="">
                <div className="min-h-auto md:min-h-100 lg:min-h-150"><TitleParagraph separation="30px" title="Suelo Pélvico" paragraph="Mediante la fisioterapia trataremos las patologías derivadas del mal funcionamiento del suelo pélvico: incontinencia urinaria, descenso de órganos pélvicos (prolapsos), dolor pélvico crónico, disfunciones sexuales y patología postparto." /></div>
                <div className="h-10"></div>
                <TextArrow text={"CONOCER MÁS"} width="200px" />
              </div>
              <div className="">
                <div className="min-h-auto md:min-h-100 lg:min-h-150"><TitleParagraph separation="30px" title="Suelo Pélvico" paragraph="Mediante la fisioterapia trataremos las patologías derivadas del mal funcionamiento del suelo pélvico: incontinencia urinaria, descenso de órganos pélvicos (prolapsos), dolor pélvico crónico, disfunciones sexuales y patología postparto." /></div>
                <div className="h-10"></div>
                <TextArrow text={"CONOCER MÁS"} width="200px" />
              </div>
              <div className="">
                <div className="min-h-auto md:min-h-100 lg:min-h-150"><TitleParagraph separation="30px" title="Suelo Pélvico" paragraph="Mediante la fisioterapia trataremos las patologías derivadas del mal funcionamiento del suelo pélvico: incontinencia urinaria, descenso de órganos pélvicos (prolapsos), dolor pélvico crónico, disfunciones sexuales y patología postparto." /></div>
                <div className="h-10"></div>
                <TextArrow text={"CONOCER MÁS"} width="200px" />
              </div>
          </div>
        </div>       
    </section>
  );
}