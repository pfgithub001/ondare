import TitleParagraph from "@/app/components/title_paragraph/titleParagraph";
import "./my.scss";
import BorderedRow from "@/app/components/bordered_row/borderedRow";

export default function Services() {
  return ( 
    <section className="section services relative">
        <div className="container m_25_auto">
            <BorderedRow gap="20px">
                <div className="w-100 h-100"><TitleParagraph title="Suelo Pélvico" paragraph="Mediante la fisioterapia trataremos las patologías derivadas del mal funcionamiento del suelo pélvico: incontinencia urinaria, descenso de órganos pélvicos (prolapsos), dolor pélvico crónico, disfunciones sexuales y patología postparto." /></div>
                <div className="w-100 h-100"><TitleParagraph title="Fisioterapia Deportiva" paragraph="Mediante la fisioterapia trataremos las patologías derivadas del mal funcionamiento del suelo pélvico: incontinencia urinaria, descenso de órganos pélvicos (prolapsos), dolor pélvico crónico, disfunciones sexuales y patología postparto." /></div>
                <div className="w-100 h-100"><TitleParagraph title="Ejercicio Terapéutico" paragraph="Mediante el ejercicio terapéutico trataremos las patologías derivadas del mal funcionamiento del suelo pélvico: incontinencia urinaria, descenso de órganos pélvicos (prolapsos), dolor pélvico crónico, disfunciones sexuales y patología postparto." /></div>
                <div className="w-100 h-100"><TitleParagraph title="Fisioterapia Músculo y esquelética" paragraph="Mediante la fisioterapia trataremos las patologías derivadas del mal funcionamiento del suelo pélvico: incontinencia urinaria, descenso de órganos pélvicos (prolapsos), dolor pélvico crónico, disfunciones sexuales y patología postparto." /></div>
            </BorderedRow>
        </div>       
    </section>
  );
}