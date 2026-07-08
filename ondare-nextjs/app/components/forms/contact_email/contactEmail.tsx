"use client";

import { useState, FormEvent } from "react";
import TextArrow from "../../generic/text_arrow/textArrow";
import "./my.scss";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactEmail() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Something went wrong");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return(
  <form className="flex flex-col gap-10 w-full" onSubmit={handleSubmit}>
    <input type="text" name="name" placeholder="Nombre" required />
    <input type="email" name="email" placeholder="Email" required />
    <textarea name="message" placeholder="Mensaje" required></textarea>
    {status === "success" && (
      <p className="text-green-600">¡Mensaje enviado correctamente!</p>
    )}
    {status === "error" && (
      <p className="text-red-600">{errorMsg}</p>
    )}
    <button type="submit" disabled={status === "loading"}>
      <TextArrow text={status === "loading" ? "Enviando..." : "Enviar"} width="10px" />
    </button>
  </form>
  );
}
