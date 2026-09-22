import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import { getCategoryBySlug } from "@/lib/categories";
import { getArticlesBySubcategory } from "@/lib/articles";

const category = getCategoryBySlug("evaluacion")!;

export function generateStaticParams() {
  return (category.subcategories ?? []).map((s) => ({ tipo: s.slug }));
}

export function generateMetadata({ params }: { params: { tipo: string } }): Metadata {
  const sub = category.subcategories?.find((s) => s.slug === params.tipo);
  if (!sub) return {};
  return {
    title: sub.name,
    description: `${sub.name} para evaluar Educación Física en Primaria: modelos y guías prácticas.`,
    alternates: { canonical: `/evaluacion/${sub.slug}` }
  };
}

export default function TipoEvaluacionPage({ params }: { params: { tipo: string } }) {
  const sub = category.subcategories?.find((s) => s.slug === params.tipo);
  if (!sub) notFound();

  const articles = getArticlesBySubcategory(sub.slug);

  return (
    <div className="container-site py-10">
      <Breadcrumbs
        items={[
          { label: category.name, href: `/${category.slug}` },
          { label: sub.name }
        ]}
      />
      <h1 className="mb-8 text-3xl font-extrabold text-slate-900">{sub.name}</h1>

      <AdSlot position="header" className="mb-10" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.length > 0 ? (
          articles.map((a) => <ArticleCard key={a.slug} article={a} />)
        ) : (
          <p className="text-slate-500">Próximamente añadiremos más recursos en esta sección.</p>
        )}
      </div>
    </div>
  );
}
