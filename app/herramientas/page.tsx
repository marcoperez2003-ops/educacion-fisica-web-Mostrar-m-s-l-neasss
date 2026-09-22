import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, Calculator, FileText, Target, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Herramientas para docentes",
  description:
    "Herramientas gratuitas para docentes de Educación Física y Primaria: generador de rúbricas, calculadora de notas y más.",
  alternates: { canonical: "/herramientas" }
};

const tools = [
  {
    href: "/herramientas/generador-rubricas",
    icon: ClipboardList,
    title: "Generador de rúbricas",
    description: "Crea rúbricas de evaluación personalizadas en segundos, listas para imprimir o compartir."
  },
  {
    href: "/herramientas/calculadora-notas",
    icon: Calculator,
    title: "Calculadora de notas",
    description: "Calcula la calificación final ponderando distintos criterios e instrumentos de evaluación."
  },
  {
    href: "/herramientas/generador-situaciones-aprendizaje",
    icon: FileText,
    title: "Generador de situaciones de aprendizaje",
    description: "Genera un esqueleto de situación de aprendizaje a partir del curso y la competencia elegida."
  },
  {
    href: "/herramientas/generador-criterios-evaluacion",
    icon: Target,
    title: "Generador de criterios de evaluación",
    description: "Redacta criterios de evaluación bien formulados a partir de una competencia específica."
  }
];

export default function HerramientasPage() {
  return (
    <div className="container-site py-10">
      <Breadcrumbs items={[{ label: "Herramientas" }]} />
      <h1 className="mb-3 text-3xl font-extrabold text-slate-900">Herramientas para docentes</h1>
      <p className="mb-10 max-w-2xl text-slate-500">
        Utilidades pensadas para ahorrarte tiempo en tareas habituales: evaluación, programación y
        cálculo de calificaciones.
      </p>

      <AdSlot position="header" className="mb-10" />

      <div className="grid gap-6 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="card group flex flex-col gap-3 p-6">
            <tool.icon className="text-primary-600" size={28} />
            <h3 className="text-lg font-bold text-slate-900">{tool.title}</h3>
            <p className="text-sm text-slate-500">{tool.description}</p>
            <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary-700">
              Usar herramienta <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
