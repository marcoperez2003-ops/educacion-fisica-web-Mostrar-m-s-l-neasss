export type Category = {
  slug: string;
  name: string;
  description: string;
  color: string; // clase tailwind para acentos
  emoji: string;
  subcategories?: { slug: string; name: string }[];
};

export const categories: Category[] = [
  {
    slug: "juegos-educacion-fisica",
    name: "Juegos de Educación Física",
    description:
      "Juegos motrices listos para usar en tus sesiones: cooperativos, de calentamiento, sin material y para espacios reducidos.",
    color: "primary",
    emoji: "⚽",
    subcategories: [
      { slug: "juegos-cooperativos", name: "Juegos cooperativos" },
      { slug: "juegos-de-calentamiento", name: "Juegos de calentamiento" },
      { slug: "juegos-sin-material", name: "Juegos sin material" },
      { slug: "juegos-para-espacios-reducidos", name: "Espacios reducidos" },
      { slug: "juegos-para-dias-de-lluvia", name: "Días de lluvia" }
    ]
  },
  {
    slug: "situaciones-aprendizaje",
    name: "Situaciones de Aprendizaje",
    description:
      "Situaciones de aprendizaje completas y adaptadas a cada curso de Educación Primaria, alineadas con la LOMLOE.",
    color: "accent",
    emoji: "🎒",
    subcategories: [
      { slug: "primero-de-primaria", name: "1º de Primaria" },
      { slug: "segundo-de-primaria", name: "2º de Primaria" },
      { slug: "tercero-de-primaria", name: "3º de Primaria" },
      { slug: "cuarto-de-primaria", name: "4º de Primaria" },
      { slug: "quinto-de-primaria", name: "5º de Primaria" },
      { slug: "sexto-de-primaria", name: "6º de Primaria" }
    ]
  },
  {
    slug: "evaluacion",
    name: "Rúbricas e Instrumentos de Evaluación",
    description:
      "Rúbricas, listas de control, escalas de observación y otros instrumentos para evaluar por competencias.",
    color: "energy",
    emoji: "📋",
    subcategories: [
      { slug: "rubricas", name: "Rúbricas" },
      { slug: "listas-de-control", name: "Listas de control" },
      { slug: "escalas-de-observacion", name: "Escalas de observación" },
      { slug: "instrumentos-de-evaluacion", name: "Instrumentos de evaluación" }
    ]
  }
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
