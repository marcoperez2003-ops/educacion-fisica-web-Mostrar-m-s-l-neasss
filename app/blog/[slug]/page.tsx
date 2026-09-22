import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import { articles, getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import { getCategoryBySlug } from "@/lib/categories";
import { renderArticleContent } from "@/lib/markdown";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.metaDescription,
      url: `${siteConfig.url}/blog/${article.slug}`,
      publishedTime: article.date,
      authors: [article.author]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription
    }
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const category = getCategoryBySlug(article.category);
  const { html, headings } = renderArticleContent(article.content);
  const related = getRelatedArticles(article);

  const midpoint = Math.floor(html.split("\n").length / 2);
  const htmlLines = html.split("\n");
  const firstHalf = htmlLines.slice(0, midpoint).join("\n");
  const secondHalf = htmlLines.slice(midpoint).join("\n");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    author: { "@type": "Person", name: article.author },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${article.slug}`
  };

  return (
    <article className="container-site py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          ...(category ? [{ label: category.name, href: `/${category.slug}` }] : []),
          { label: article.title }
        ]}
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <div className="max-w-3xl">
          {category && <span className="badge mb-4">{category.emoji} {category.name}</span>}
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            {article.title}
          </h1>

          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5"><User size={15} /> {article.author}</span>
            <span className="flex items-center gap-1.5"><Calendar size={15} /> {formatDate(article.date)}</span>
            <span className="flex items-center gap-1.5"><Clock size={15} /> {article.readingTime} min de lectura</span>
          </div>

          <TableOfContents headings={headings} />

          <div className="prose-article" dangerouslySetInnerHTML={{ __html: firstHalf }} />

          {/* Anuncio dentro del artículo */}
          <AdSlot position="in-article" className="my-8" />

          <div className="prose-article" dangerouslySetInnerHTML={{ __html: secondHalf }} />

          {/* Anuncio al final del artículo */}
          <AdSlot position="article-end" className="mt-10" />

          {related.length > 0 && (
            <section className="mt-14">
              <h2 className="mb-6 text-xl font-bold text-slate-900">Artículos relacionados</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-6">
          <AdSlot position="sidebar" className="h-80" />
          <div className="card p-5">
            <h3 className="mb-2 font-bold text-slate-900">¿Te ha resultado útil?</h3>
            <p className="mb-4 text-sm text-slate-500">
              Descubre más recursos en {category?.name.toLowerCase() ?? "nuestro blog"}.
            </p>
            {category && (
              <Link href={`/${category.slug}`} className="btn-secondary w-full">
                Ver más
              </Link>
            )}
          </div>
        </aside>
      </div>
    </article>
  );
}
