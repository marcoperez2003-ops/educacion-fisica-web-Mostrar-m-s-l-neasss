"use client";

import { useMemo, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";

type Item = { id: number; name: string; grade: string; weight: string };

export default function CalculadoraNotasPage() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Ejecución motriz", grade: "", weight: "40" },
    { id: 2, name: "Trabajo en equipo", grade: "", weight: "30" },
    { id: 3, name: "Actitud y esfuerzo", grade: "", weight: "30" }
  ]);

  function addItem() {
    setItems((it) => [...it, { id: Date.now(), name: "", grade: "", weight: "" }]);
  }

  function removeItem(id: number) {
    setItems((it) => it.filter((i) => i.id !== id));
  }

  function update(id: number, field: keyof Item, value: string) {
    setItems((it) => it.map((i) => (i.id === id ? { ...i, [field]: value } : i)));
  }

  const totalWeight = useMemo(
    () => items.reduce((acc, i) => acc + (parseFloat(i.weight) || 0), 0),
    [items]
  );

  const finalGrade = useMemo(() => {
    const sum = items.reduce((acc, i) => {
      const grade = parseFloat(i.grade) || 0;
      const weight = parseFloat(i.weight) || 0;
      return acc + (grade * weight) / 100;
    }, 0);
    return sum;
  }, [items]);

  return (
    <div className="container-site py-10">
      <Breadcrumbs items={[{ label: "Herramientas", href: "/herramientas" }, { label: "Calculadora de notas" }]} />
      <h1 className="mb-3 text-3xl font-extrabold text-slate-900">Calculadora de notas</h1>
      <p className="mb-8 max-w-2xl text-slate-500">
        Introduce cada criterio con su nota (de 0 a 10) y su peso porcentual. La suma de los pesos
        debería ser 100 para un resultado correcto.
      </p>

      <AdSlot position="header" className="mb-10" />

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="space-y-3 rounded-xl2 border border-slate-100 p-6">
            <div className="hidden grid-cols-[1fr_100px_100px_40px] gap-2 text-xs font-semibold text-slate-400 sm:grid">
              <span>Criterio</span>
              <span>Nota (0-10)</span>
              <span>Peso (%)</span>
              <span />
            </div>
            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-2 gap-2 sm:grid-cols-[1fr_100px_100px_40px]">
                <input
                  placeholder="Nombre del criterio"
                  value={item.name}
                  onChange={(e) => update(item.id, "name", e.target.value)}
                  className="col-span-2 rounded-lg border border-slate-200 px-3 py-2 text-sm sm:col-span-1"
                />
                <input
                  type="number"
                  min={0}
                  max={10}
                  step={0.1}
                  placeholder="Nota"
                  value={item.grade}
                  onChange={(e) => update(item.id, "grade", e.target.value)}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
                />
                <input
                  type="number"
                  min={0}
                  max={100}
                  placeholder="Peso"
                  value={item.weight}
                  onChange={(e) => update(item.id, "weight", e.target.value)}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
                />
                <button onClick={() => removeItem(item.id)} className="rounded-lg p-2 text-red-500 hover:bg-red-50">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}

            <button onClick={addItem} className="btn-secondary text-sm">
              <Plus size={16} /> Añadir criterio
            </button>

            <p className={`text-xs font-semibold ${totalWeight === 100 ? "text-accent-600" : "text-energy-600"}`}>
              Suma de pesos actual: {totalWeight}% {totalWeight !== 100 && "(debería ser 100%)"}
            </p>
          </div>

          <div className="mt-6 rounded-xl2 bg-primary-600 p-8 text-center text-white">
            <p className="text-sm uppercase tracking-wide text-primary-100">Nota final calculada</p>
            <p className="text-5xl font-extrabold">{finalGrade.toFixed(2)}</p>
          </div>
        </div>

        <aside>
          <AdSlot position="sidebar" className="h-80" />
        </aside>
      </div>
    </div>
  );
}
