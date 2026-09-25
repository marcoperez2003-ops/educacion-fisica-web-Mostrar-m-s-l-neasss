export type Subject = {
  slug: string;
  name: string;
  emoji: string;
};

export const subjects: Subject[] = [
  { slug: "educacion-fisica", name: "Educación Física", emoji: "⚽" },
  { slug: "lengua", name: "Lengua", emoji: "📖" },
  { slug: "matematicas", name: "Matemáticas", emoji: "🔢" },
  { slug: "ciencias-naturales", name: "Ciencias de la Naturaleza", emoji: "🌱" },
  { slug: "ciencias-sociales", name: "Ciencias Sociales", emoji: "🗺️" },
  { slug: "ingles", name: "Inglés", emoji: "🇬🇧" },
  { slug: "educacion-artistica", name: "Educación Artística", emoji: "🎨" },
  { slug: "valores-civicos", name: "Valores Cívicos y Éticos", emoji: "🤝" },
  { slug: "segunda-lengua-extranjera", name: "Segunda Lengua Extranjera", emoji: "🌍" },
  { slug: "religion", name: "Religión", emoji: "🕊️" }
];

export function getSubjectBySlug(slug: string) {
  return subjects.find((s) => s.slug === slug);
}
