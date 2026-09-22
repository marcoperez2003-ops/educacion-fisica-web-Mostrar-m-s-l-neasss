import type { Heading } from "@/lib/markdown";
import { ListTree } from "lucide-react";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  if (!headings.length) return null;

  return (
    <nav aria-label="Índice del artículo" className="mb-8 rounded-xl2 border border-slate-100 bg-slate-50 p-5">
      <p className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-900">
        <ListTree size={16} /> Índice de contenidos
      </p>
      <ul className="space-y-1.5 text-sm">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "ml-4" : ""}>
            <a href={`#${h.id}`} className="text-slate-600 hover:text-primary-700 hover:underline">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
