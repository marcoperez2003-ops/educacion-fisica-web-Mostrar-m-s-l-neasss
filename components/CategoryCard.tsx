import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/lib/categories";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/${category.slug}`} className="card group flex flex-col gap-3 p-6">
      <span className="text-3xl">{category.emoji}</span>
      <h3 className="text-lg font-bold text-slate-900">{category.name}</h3>
      <p className="text-sm text-slate-500">{category.description}</p>
      <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary-700">
        Ver recursos
        <ArrowRight size={16} className="transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
