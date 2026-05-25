import ContactEmail from "@/app/components/forms/contact_email/contactEmail";
import "./my.scss";

export default function Contact() {
  return (
    <section className="section contact relative">
      <div 
      className="
      container m_25_auto
      flex flex-col lg:flex-row gap-x-10 justify-between
      ">
        <div 
        className="
        w-full 
        lg:w-[50%]
        flex flex-col gap-10
        ">
          <div className="">
            <h1 className="text-5xl">Contacta</h1>
            <p className="mt-10">Contacta con nosotros mediante el formulario que se encuentra a la derecha para consultar tus dudas o para tener una cita en nuestro Centro de Fisioterapia en Donostia / San Sebastián. También puedes contactarnos por teléfono llamándo al número que aparece debajo.</p>
          </div>
          <div>
            <div className="flex flex-col gap-10 mt-25">
              <a href="tel:611283493" target="_blank">611 283 493</a>
              <a href="mailto:info@ondarefisioterapia.com" target="_blank">info@ondarefisioterapia.com</a>
              <a href="https://www.google.com/maps/place/Calle+Manuel+de+Lekuona,+3,+20018+Donostia,+Gipuzkoa/@43.318256,-1.979764,17z/data=!3m1!4b1!4m5!3m4!8m2!3d43.318256!4d-1.979764" target="_blank" rel="noopener noreferrer">
                Calle Manuel de Lekuona Nº 3 Bajo 20018, Donostia / San Sebastián
              </a>
              <div>
                <span>Con cita previa</span><br />
                <span>Atendemos urgencias</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <ContactEmail />
        </div>     
      </div>
    </section>
  );
}
