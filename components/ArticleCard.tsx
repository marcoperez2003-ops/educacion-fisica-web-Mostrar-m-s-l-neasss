import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import type { Article } from "@/lib/articles";
import { getCategoryBySlug } from "@/lib/categories";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" });
}

export default function ArticleCard({ article }: { article: Article }) {
  const category = getCategoryBySlug(article.category);

  return (
    <Link href={`/blog/${article.slug}`} className="card flex flex-col gap-3 p-5">
      {category && <span className="badge w-fit">{category.emoji} {category.name}</span>}
      <h3 className="text-lg font-bold leading-snug text-slate-900">{article.title}</h3>
      <p className="line-clamp-3 text-sm text-slate-500">{article.excerpt}</p>
      <div className="mt-2 flex items-center gap-4 text-xs text-slate-400">
        <span className="flex items-center gap-1"><Calendar size={14} /> {formatDate(article.date)}</span>
        <span className="flex items-center gap-1"><Clock size={14} /> {article.readingTime} min</span>
      </div>
    </Link>
  );
}
