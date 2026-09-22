"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: conectar con tu backend, Formspree, Resend o similar para el envío real.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card flex flex-col items-center gap-3 p-10 text-center">
        <CheckCircle2 className="text-accent-600" size={40} />
        <p className="font-semibold text-slate-800">¡Gracias por tu mensaje! Te responderemos pronto.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4 p-6">
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Nombre</label>
        <input required className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Correo electrónico</label>
        <input type="email" required className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Mensaje</label>
        <textarea required rows={5} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </div>
      <button type="submit" className="btn-primary w-full">
        <Send size={16} /> Enviar mensaje
      </button>
    </form>
  );
}
