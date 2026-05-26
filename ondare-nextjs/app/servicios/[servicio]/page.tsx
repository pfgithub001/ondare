import SueloPelvico from "@/app/sections/suelo_pelvico/sueloPelvico";
import HeadLogo from "../../components/generic/head_logo/headLogo";
import Services from "@/app/sections/services/services";
import BackgroundParagraph from "@/app/components/generic/background_paragraph/backgroundParagraph";

export default async function Servicios({ params }: { params: Promise<{ servicio: string }> }) {
  const { servicio } = await params;

  return (
    <>
        <div className="m_25_auto">
          <HeadLogo width="300px" color="black" />
        </div>

        {servicio === "suelo_pelvico" && <SueloPelvico />}

        <Services />
        <BackgroundParagraph 
        imageSrc="/images/ONDARE_3.jpeg"
        opacity=".2"
        paragraph="Centro especializado en Fisioterapia del suelo pélvico, preparación al parto y rehabilitación postparto en en barrio del antiguo, Donostia / San Sebastián"
        />
    </>
  );
}
