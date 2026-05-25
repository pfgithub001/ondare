"use client";

import TextArrow from "../../generic/text_arrow/textArrow";
import "./my.scss";

export default function ContactEmail() {
  return( 
  <form className="flex flex-col gap-10 w-full" action="">
    <input type="text" placeholder="Nombre"/>
    <input type="email" placeholder="Email"/>
    <textarea placeholder="Mensaje"></textarea>
    <button>
      <TextArrow text="Enviar" width="10px"/>
    </button>
  </form>
  );
}
