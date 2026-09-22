import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import { getCategoryBySlug } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/articles";

const category = getCategoryBySlug("situaciones-aprendizaje")!;

export const metadata: Metadata = {
  title: category.name,
  description: category.description,
  alternates: { canonical: `/${category.slug}` }
};

export default function SituacionesPage() {
  const articles = getArticlesByCategory(category.slug);

  return (
    <div className="container-site py-10">
      <Breadcrumbs items={[{ label: category.name }]} />
      <h1 className="mb-3 text-3xl font-extrabold text-slate-900">{category.emoji} {category.name}</h1>
      <p className="mb-8 max-w-2xl text-slate-500">{category.description}</p>

      <div className="mb-10 flex flex-wrap gap-2">
        {category.subcategories?.map((sub) => (
          <Link
            key={sub.slug}
            href={`/situaciones-aprendizaje/${sub.slug}`}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-accent-100 hover:text-accent-700"
          >
            {sub.name}
          </Link>
        ))}
      </div>

      <AdSlot position="header" className="mb-10" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
