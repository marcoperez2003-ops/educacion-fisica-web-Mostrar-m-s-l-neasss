import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import { getCategoryBySlug } from "@/lib/categories";
import { getArticlesBySubcategory } from "@/lib/articles";

const category = getCategoryBySlug("metodologias-activas")!;

export function generateStaticParams() {
  return (category.subcategories ?? []).map((s) => ({ metodologia: s.slug }));
}

export function generateMetadata({ params }: { params: { metodologia: string } }): Metadata {
  const sub = category.subcategories?.find((s) => s.slug === params.metodologia);
  if (!sub) return {};
  return {
    title: sub.name,
    description: `${sub.name}: guías y recursos prácticos para aplicarla en Educación Primaria.`,
    alternates: { canonical: `/metodologias-activas/${sub.slug}` }
  };
}

export default function MetodologiaPage({ params }: { params: { metodologia: string } }) {
  const sub = category.subcategories?.find((s) => s.slug === params.metodologia);
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

      {articles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <p className="text-slate-500">Próximamente añadiremos artículos en esta subcategoría.</p>
      )}
    </div>
  );
}
