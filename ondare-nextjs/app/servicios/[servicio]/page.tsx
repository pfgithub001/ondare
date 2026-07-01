import SueloPelvico from "@/app/sections/suelo_pelvico/sueloPelvico";

import HeadLogo from "../../components/generic/head_logo/headLogo";
import Services from "@/app/sections/services/services";
import BackgroundParagraph from "@/app/components/generic/background_paragraph/backgroundParagraph";
import Fisioterapia from "@/app/sections/fisioterapia/fisioterapia";
import Maternidad from "@/app/sections/maternidad/maternidad";
import Postparto from "@/app/sections/postparto/postparto";
import EntrenamientoMujer from "@/app/sections/entrenamiento_mujer/entrenamientoMujer";

export default async function Servicios({ params }: { params: Promise<{ servicio: string }> }) {
  const { servicio } = await params;

  return (
    <>
        <div className="m_25_auto">
          <HeadLogo width="300px" color="black" />
        </div>

        {servicio === "suelo_pelvico" && <SueloPelvico />}
        {servicio === "fisioterapia" && <Fisioterapia />}
        {servicio === "maternidad" && <Maternidad />}
        {servicio === "postparto" && <Postparto />}
        {servicio === "entrenamiento_mujer" && <EntrenamientoMujer />}

        <Services />
        <BackgroundParagraph 
        imageSrc="/images/ONDARE_3.jpeg"
        opacity=".2"
        paragraph="Centro especializado en Fisioterapia del suelo pélvico, preparación al parto y rehabilitación postparto en en barrio del antiguo, Donostia / San Sebastián"
        />
    </>
  );
}
