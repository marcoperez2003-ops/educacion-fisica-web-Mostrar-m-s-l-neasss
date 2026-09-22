"use client";

import { useMemo, useState } from "react";
import { Copy, Check } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";

const verbos = [
  "Aplicar", "Adaptar", "Resolver", "Cooperar en", "Valorar", "Identificar", "Practicar", "Diseñar"
];

const contenidos = [
  "situaciones motrices individuales",
  "situaciones motrices de cooperación",
  "situaciones motrices de oposición",
  "juegos y actividades expresivas",
  "hábitos de vida activa y saludable",
  "actividades en el medio natural"
];

const finalidades = [
  "mostrando autonomía progresiva",
  "de forma segura y respetuosa",
  "valorando el esfuerzo personal y colectivo",
  "utilizando distintos recursos expresivos",
  "aplicando principios básicos de seguridad"
];

export default function GeneradorCriteriosPage() {
  const [verbo, setVerbo] = useState(verbos[0]);
  const [contenido, setContenido] = useState(contenidos[0]);
  const [finalidad, setFinalidad] = useState(finalidades[0]);
  const [copied, setCopied] = useState(false);

  const criterio = useMemo(
    () => `${verbo} ${contenido}, ${finalidad}.`,
    [verbo, contenido, finalidad]
  );

  function handleCopy() {
    navigator.clipboard.writeText(criterio);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="container-site py-10">
      <Breadcrumbs
        items={[{ label: "Herramientas", href: "/herramientas" }, { label: "Generador de criterios de evaluación" }]}
      />
      <h1 className="mb-3 text-3xl font-extrabold text-slate-900">Generador de criterios de evaluación</h1>
      <p className="mb-8 max-w-2xl text-slate-500">
        Combina un verbo de acción, un contenido y una finalidad para redactar criterios de
        evaluación bien formulados en segundos.
      </p>

      <AdSlot position="header" className="mb-10" />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 rounded-xl2 border border-slate-100 p-6">
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Verbo de acción</span>
            <select value={verbo} onChange={(e) => setVerbo(e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
              {verbos.map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Contenido</span>
            <select value={contenido} onChange={(e) => setContenido(e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
              {contenidos.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Finalidad / matiz</span>
            <select value={finalidad} onChange={(e) => setFinalidad(e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
              {finalidades.map((f) => <option key={f} value={f}>{f}</option>)}
            </select>
          </label>
        </div>

        <div className="relative">
          <div className="rounded-xl2 border border-slate-100 bg-slate-50 p-6 text-lg font-medium text-slate-800">
            {criterio}
          </div>
          <button onClick={handleCopy} className="btn-primary absolute right-4 top-4 text-xs">
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copiado" : "Copiar"}
          </button>
        </div>
      </div>
    </div>
  );
}
