"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";

const cursos = ["1º Primaria", "2º Primaria", "3º Primaria", "4º Primaria", "5º Primaria", "6º Primaria"];

export default function GeneradorSituacionesPage() {
  const [curso, setCurso] = useState(cursos[0]);
  const [titulo, setTitulo] = useState("");
  const [competencia, setCompetencia] = useState("");
  const [sesiones, setSesiones] = useState(4);
  const [copied, setCopied] = useState(false);

  const output = `SITUACIÓN DE APRENDIZAJE
Curso: ${curso}
Título: ${titulo || "[Título de la situación de aprendizaje]"}
Número de sesiones: ${sesiones}

1. CONTEXTUALIZACIÓN
[Describe brevemente el punto de partida, los intereses del alumnado y la conexión con otras áreas.]

2. COMPETENCIA ESPECÍFICA TRABAJADA
${competencia || "[Indica la competencia específica del área de Educación Física trabajada.]"}

3. CRITERIOS DE EVALUACIÓN RELACIONADOS
- [Criterio de evaluación 1]
- [Criterio de evaluación 2]

4. SECUENCIA DE ACTIVIDADES (${sesiones} sesiones)
${Array.from({ length: sesiones })
  .map((_, i) => `Sesión ${i + 1}: [Describe la actividad principal de esta sesión]`)
  .join("\n")}

5. PRODUCTO FINAL
[Describe la evidencia final que mostrará el aprendizaje del alumnado.]

6. INSTRUMENTOS DE EVALUACIÓN
[Rúbrica / lista de control / escala de observación asociada a esta situación de aprendizaje.]`;

  function handleCopy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="container-site py-10">
      <Breadcrumbs
        items={[{ label: "Herramientas", href: "/herramientas" }, { label: "Generador de situaciones de aprendizaje" }]}
      />
      <h1 className="mb-3 text-3xl font-extrabold text-slate-900">Generador de situaciones de aprendizaje</h1>
      <p className="mb-8 max-w-2xl text-slate-500">
        Rellena los datos básicos y obtén un esqueleto de situación de aprendizaje listo para
        completar y adaptar a tu grupo.
      </p>

      <AdSlot position="header" className="mb-10" />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 rounded-xl2 border border-slate-100 p-6">
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Curso</span>
            <select value={curso} onChange={(e) => setCurso(e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
              {cursos.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Título de la situación</span>
            <input
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Ej. Olimpiadas escolares"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Competencia específica</span>
            <input
              value={competencia}
              onChange={(e) => setCompetencia(e.target.value)}
              placeholder="Ej. Adaptar la motricidad a contextos de práctica de actividad física"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Número de sesiones</span>
            <input
              type="number"
              min={1}
              max={12}
              value={sesiones}
              onChange={(e) => setSesiones(parseInt(e.target.value) || 1)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
        </div>

        <div className="relative">
          <pre className="max-h-[500px] overflow-auto whitespace-pre-wrap rounded-xl2 border border-slate-100 bg-slate-50 p-6 text-xs text-slate-700">
{output}
          </pre>
          <button
            onClick={handleCopy}
            className="btn-primary absolute right-4 top-4 text-xs"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copiado" : "Copiar"}
          </button>
        </div>
      </div>
    </div>
  );
}
