"use client";

import { useState } from "react";
import { Plus, Trash2, Printer } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";

type Criterion = { id: number; name: string; levels: string[] };

const LEVEL_LABELS = ["Iniciado", "En proceso", "Logrado", "Avanzado"];

export default function GeneradorRubricasPage() {
  const [title, setTitle] = useState("Rúbrica de evaluación");
  const [criteria, setCriteria] = useState<Criterion[]>([
    { id: 1, name: "Ejecución técnica", levels: ["", "", "", ""] }
  ]);

  function addCriterion() {
    setCriteria((c) => [...c, { id: Date.now(), name: "", levels: ["", "", "", ""] }]);
  }

  function removeCriterion(id: number) {
    setCriteria((c) => c.filter((crit) => crit.id !== id));
  }

  function updateName(id: number, value: string) {
    setCriteria((c) => c.map((crit) => (crit.id === id ? { ...crit, name: value } : crit)));
  }

  function updateLevel(id: number, index: number, value: string) {
    setCriteria((c) =>
      c.map((crit) => {
        if (crit.id !== id) return crit;
        const levels = [...crit.levels];
        levels[index] = value;
        return { ...crit, levels };
      })
    );
  }

  return (
    <div className="container-site py-10">
      <Breadcrumbs items={[{ label: "Herramientas", href: "/herramientas" }, { label: "Generador de rúbricas" }]} />
      <h1 className="mb-3 text-3xl font-extrabold text-slate-900">Generador de rúbricas</h1>
      <p className="mb-8 max-w-2xl text-slate-500">
        Añade tus criterios y describe cada nivel de logro. Podrás imprimir o guardar la rúbrica
        generada en PDF desde el diálogo de impresión de tu navegador.
      </p>

      <AdSlot position="header" className="mb-10" />

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="mb-6 space-y-4 rounded-xl2 border border-slate-100 p-6 print:hidden">
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Título de la rúbrica</span>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              />
            </label>

            {criteria.map((crit) => (
              <div key={crit.id} className="rounded-lg border border-slate-100 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <input
                    placeholder="Nombre del criterio (ej. Trabajo en equipo)"
                    value={crit.name}
                    onChange={(e) => updateName(crit.id, e.target.value)}
                    className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  />
                  <button onClick={() => removeCriterion(crit.id)} className="rounded-lg p-2 text-red-500 hover:bg-red-50">
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {crit.levels.map((level, i) => (
                    <input
                      key={i}
                      placeholder={`${LEVEL_LABELS[i]}: descripción del nivel`}
                      value={level}
                      onChange={(e) => updateLevel(crit.id, i, e.target.value)}
                      className="rounded-lg border border-slate-200 px-3 py-2 text-xs"
                    />
                  ))}
                </div>
              </div>
            ))}

            <div className="flex gap-3">
              <button onClick={addCriterion} className="btn-secondary text-sm">
                <Plus size={16} /> Añadir criterio
              </button>
              <button onClick={() => window.print()} className="btn-primary text-sm">
                <Printer size={16} /> Imprimir / Guardar PDF
              </button>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl2 border border-slate-100 p-4">
            <h2 className="mb-4 text-xl font-bold text-slate-900">{title}</h2>
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-200 bg-slate-50 p-2 text-left">Criterio</th>
                  {LEVEL_LABELS.map((l) => (
                    <th key={l} className="border border-slate-200 bg-slate-50 p-2 text-left">{l}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {criteria.map((crit) => (
                  <tr key={crit.id}>
                    <td className="border border-slate-200 p-2 font-semibold">{crit.name || "—"}</td>
                    {crit.levels.map((level, i) => (
                      <td key={i} className="border border-slate-200 p-2 text-slate-600">{level || "—"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="print:hidden">
          <AdSlot position="sidebar" className="h-80" />
        </aside>
      </div>
    </div>
  );
}
