import Hero from "./sections/hero/hero";
import WhatIsOndare from "./sections/what_is_ondare/whatIsOndare";
import Services from "./sections/services/services";
import BackgroundParagraph from "./components/generic/background_paragraph/backgroundParagraph";
import Contact from "./sections/contact/contact";

export default function Landing() {
  return (
    <>
      <Hero />
      <WhatIsOndare />
      <Services />
      <BackgroundParagraph 
      imageSrc="images/ONDARE_15.jpeg"
      opacity=".2"
      paragraph="Centro especializado en Fisioterapia del suelo pélvico, preparación al parto y rehabilitación postparto en en barrio del antiguo, Donostia / San Sebastián"
      />
      <Contact />
    </>
  );
}
