import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import { articles } from "@/lib/articles";
import { categories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Blog de Educación Física y Primaria",
  description:
    "Artículos sobre juegos de Educación Física, situaciones de aprendizaje y evaluación educativa para docentes de Primaria en España.",
  alternates: { canonical: "/blog" }
};

export default function BlogPage({
  searchParams
}: {
  searchParams: { categoria?: string };
}) {
  const filtered = searchParams.categoria
    ? articles.filter((a) => a.category === searchParams.categoria)
    : articles;

  const sorted = [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container-site py-10">
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <h1 className="mb-3 text-3xl font-extrabold text-slate-900">Blog para docentes</h1>
      <p className="mb-8 max-w-2xl text-slate-500">
        Artículos prácticos sobre juegos, situaciones de aprendizaje y evaluación en Educación
        Física y Primaria, listos para aplicar en el aula.
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        <a
          href="/blog"
          className={`rounded-full px-4 py-2 text-sm font-semibold ${
            !searchParams.categoria ? "bg-primary-600 text-white" : "bg-slate-100 text-slate-600"
          }`}
        >
          Todos
        </a>
        {categories.map((c) => (
          <a
            key={c.slug}
            href={`/blog?categoria=${c.slug}`}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              searchParams.categoria === c.slug ? "bg-primary-600 text-white" : "bg-slate-100 text-slate-600"
            }`}
          >
            {c.emoji} {c.name}
          </a>
        ))}
      </div>

      <AdSlot position="header" className="mb-10" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
