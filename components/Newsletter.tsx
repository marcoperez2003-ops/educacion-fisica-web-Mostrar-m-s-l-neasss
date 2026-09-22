"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: conectar con tu proveedor de email marketing (Mailchimp, Brevo, etc.)
    // Este formulario es un ejemplo de UI; no envía datos a ningún servidor aún.
    setSent(true);
  }

  return (
    <section className="rounded-xl2 bg-accent-50 p-8 sm:p-10">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-600 text-white">
          <Mail size={22} />
        </span>
        <h2 className="text-2xl font-bold text-slate-900">Recibe recursos nuevos cada semana</h2>
        <p className="text-sm text-slate-600">
          Únete a la newsletter de {" "}
          <span className="font-semibold">EduFísica Primaria</span> y recibe juegos, situaciones
          de aprendizaje y rúbricas directamente en tu correo.
        </p>

        {sent ? (
          <p className="mt-2 flex items-center gap-2 font-semibold text-accent-700">
            <CheckCircle2 size={20} /> ¡Gracias! Revisa tu correo para confirmar la suscripción.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="tu-email@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full border border-slate-200 px-5 py-3 text-sm focus:border-accent-500 focus:outline-none"
            />
            <button type="submit" className="btn-primary bg-accent-600 hover:bg-accent-700">
              Suscribirme
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
