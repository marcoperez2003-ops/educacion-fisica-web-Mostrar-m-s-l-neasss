import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import { getCategoryBySlug } from "@/lib/categories";
import { articles } from "@/lib/articles";
import { subjects } from "@/lib/subjects";

const category = getCategoryBySlug("situaciones-aprendizaje")!;

export function generateStaticParams() {
  return (category.subcategories ?? []).map((s) => ({ curso: s.slug }));
}

export function generateMetadata({ params }: { params: { curso: string } }): Metadata {
  const sub = category.subcategories?.find((s) => s.slug === params.curso);
  if (!sub) return {};
  return {
    title: `Situaciones de aprendizaje de ${sub.name}`,
    description: `Situaciones de aprendizaje de Educación Física para ${sub.name}, alineadas con la LOMLOE.`,
    alternates: { canonical: `/situaciones-aprendizaje/${sub.slug}` }
  };
}

function buildHref(curso: string, asignatura?: string) {
  const params = new URLSearchParams();
  if (asignatura) params.set("asignatura", asignatura);
  const query = params.toString();
  return query ? `/situaciones-aprendizaje/${curso}?${query}` : `/situaciones-aprendizaje/${curso}`;
}

export default function CursoPage({
  params,
  searchParams
}: {
  params: { curso: string };
  searchParams: { asignatura?: string };
}) {
  const sub = category.subcategories?.find((s) => s.slug === params.curso);
  if (!sub) notFound();

  const { asignatura } = searchParams;

  const filtered = articles.filter((a) => {
    const matchesCurso = a.subcategory === sub.slug;
    const matchesAsignatura = asignatura ? a.subject === asignatura : true;
    return matchesCurso && matchesAsignatura;
  });

  return (
    <div className="container-site py-10">
      <Breadcrumbs
        items={[
          { label: category.name, href: `/${category.slug}` },
          { label: sub.name }
        ]}
      />
      <h1 className="mb-8 text-3xl font-extrabold text-slate-900">Situaciones de aprendizaje · {sub.name}</h1>

      <div className="mb-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Asignatura</p>
        <div className="flex flex-wrap gap-2">
          <Link
            href={buildHref(sub.slug, undefined)}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              !asignatura ? "bg-accent-600 text-white" : "bg-slate-100 text-slate-600"
            }`}
          >
            Todas
          </Link>
          {subjects.map((s) => (
            <Link
              key={s.slug}
              href={buildHref(sub.slug, s.slug)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                asignatura === s.slug ? "bg-accent-600 text-white" : "bg-slate-100 text-slate-600"
              }`}
            >
              {s.emoji} {s.name}
            </Link>
          ))}
        </div>
      </div>

      <AdSlot position="header" className="mb-10" />

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <p className="text-slate-500">No hay situaciones de aprendizaje que coincidan con estos filtros todavía.</p>
      )}
    </div>
  );
}
