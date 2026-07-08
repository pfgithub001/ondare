import Contact from "@/app/sections/contact/contact";
import HeadLogo from "../components/generic/head_logo/headLogo";

export default function Contacto() {
  return (
    <>
      <div className="m_25_auto">
        <HeadLogo width="300px" color="black" />
      </div>
      <Contact />
    </>
  );
}
